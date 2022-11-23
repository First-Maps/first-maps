import axios from 'axios'
import dbConnect from './dbConnect.js'
import dev_LocationOfInterest from '../models/dev_LocationOfInterest.js'
import nativeIpsum from './nativeIpsum.js'


dbConnect()


/**
 * HELPER FUNCTION
 * removes all of the usual symbols that may interfere with the URL.
 */
function sanitizeStringForURL(str){
  //let sanitized = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
  
  // replace spaces with underscores
  //sanitized = sanitized.replace(/\s/g, '_') 

  // replace html entities with actual apostrophes
  const aposRegex = /&#8217;/g
  const leftSingleQuotRegex = /&#8216;/g
  const ampersandRegex = /&#038;/g
  const slashRegex = /\//g
  const sanitized = str.replace(aposRegex, "'")
    .replace(leftSingleQuotRegex, "‘")
    .replace(ampersandRegex, "and")
    .replace(slashRegex, " or ")
  return sanitized
}


/**
 * HELPER FUNCTION
 * @param {Array} locationObj, accepts an object with information on territories, in the same
 * format returned by the native-lands API.
 * @returns {Array} returns an array of two elements, [longitude, latitude]. Representing the middle of the polygon
 * NOTE: Current implementation will not work for polygons near the international date line or prime meridian
 */
function findMiddleOfPolygon(locationObj) {
  // set up variables for comparison against location coordinates
	let eastmost = [-180, 0]
  let westmost = [180, 0]
  let northmost = [0, -90]
  let southmost = [0, 90]

  let polygonCoordinates = locationObj.geometry.coordinates[0]
  
  //  loop through all points, find eastmost, westmost, northmost, southmost point in array of coordinates,
  for(let coordinate of polygonCoordinates){
    if(coordinate[0] > eastmost[0]){
      eastmost = coordinate
    }
    if(coordinate[0] < westmost[0]){
      westmost = coordinate
    }
    if(coordinate[1] > northmost[1]){
      northmost = coordinate
    }
    if(coordinate[1] < southmost[1]){
      southmost = coordinate
    }
  }

  // find middle point between eastmost and westmost
  let middleLongitude = (eastmost[0] + westmost[0]) / 2
  let middleLatitude = (northmost[1] + southmost[1]) / 2

  return [middleLongitude, middleLatitude]
}



/**
 * HELPER FUNCTION
 * Checks whether given coordinates are within given bounds. 
 * By default, bounds are set to roughly outline British Columbia.
 * @param {*} coordinate in the form [longitude, latitude]
 * @param {number} north latitude of northern boundary
 * @param {number} south latitude of southern boundary
 * @param {number} east longitude of eastern boundary
 * @param {number} west longitude of western boundary
 * @returns {boolean} returns true if coordinate is within the bounds defined by north, south, east, west
 */
function isLocationInBounds(coordinate, north = 60.5000, south = 47.440567, east = -113.595329, west = -127.915090 ){
  let latitude = coordinate[1]
  let longitude = coordinate[0]
    
  let isLocationInBounds = 
  	latitude < north && 
    latitude > south && 
    longitude < east && 
    longitude > west
    
  return isLocationInBounds
}



/**
 * MAIN FUNCTION
 * Calls the native-lands api to get a list of locations. 
 * For each location, it calculates the middle of the territory and checks whether it is within the given bounds. 
 * If it is, it adds the location to the database.
 */
export default async function seed(){
	try {
		// get locations of interest from API
  	let response = await axios.get("https://native-land.ca/api/index.php?maps=territories")
	 	const locationsArray = response.data
    const categories = ['arts','culture','language','history'] // the 4 possible categories for a location of interest

  	// loop through all locations, locations are represented by a polygon
  	for(let locationObj of locationsArray){
			let middleOfPolygon = findMiddleOfPolygon(locationObj) // find middle of polygon
    	let isInBounds = isLocationInBounds(middleOfPolygon) // check if the middle of the polygon is within given bounds
				
			// if the middle of the polygon is NOT in bounds, ignore it
    	if(!isInBounds){
        continue;
      }

      let category = categories[Math.floor(Math.random() * categories.length)] // generate a random category from the categories array

      locationObj.middleOfPolygon = middleOfPolygon // add to the location object

      let name = locationObj.properties.Name
      let coordinates = locationObj.middleOfPolygon

      let descriptions = nativeIpsum[category] // array of descriptions from the randomly generated category, from /utils/nativeIpsum.js
      let description = descriptions[Math.floor(Math.random() * descriptions.length)] // select a random description

      // sanitize the name
      let sanitizedName = sanitizeStringForURL(name)

      // if description length greater than 500 characters, truncate it. 
      if (description.length > 500){
        description = description.substring(0, 500)
      }

      // insert into database
      await dev_LocationOfInterest.create({ 
        name: sanitizedName, 
        coordinates, 
        category, 
        description 
      })
	  }

  } catch (error) {
  	console.error(error)
    if (axios.isCancel(error)) {
    	return
	  }
  }
}

