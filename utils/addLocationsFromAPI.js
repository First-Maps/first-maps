import axios from 'axios'
import dbConnect from './dbConnect.js';


dbConnect()


/**
 * @param {Array} polygon, accepts polygon defined by array of coordinates. Each array is a coordinate pair [longitude, latitude]
 * @returns {Array} returns an array of the middle coordinate pair [longitude, latitude]
 * NOTE: Current implementation will not work for polygons near the international date line or prime meridian
 */
 function findMiddleOfPolygon(locationObj) {
    let eastmost = [-180, 0];
    let westmost = [180, 0];
    let northmost = [0, -90];
    let southmost = [0, 90];   

    let polygonCoordinates = locationObj.geometry.coordinates[0];
   

    // find eastmost, westmost, northmost, southmost point in array, loop through all points
    for(let coordinate of polygonCoordinates){
        if(coordinate[0] > eastmost[0]){
            eastmost = coordinate;
        }
        if(coordinate[0] < westmost[0]){
            westmost = coordinate;
        }
        if(coordinate[1] > northmost[1]){
            northmost = coordinate;
        }
        if(coordinate[1] < southmost[1]){
            southmost = coordinate;
        }
    }

    // find middle point between eastmost and westmost
    let middleLongitude = (eastmost[0] + westmost[0]) / 2;
    let middleLatitude = (northmost[1] + southmost[1]) / 2;

    return [middleLongitude, middleLatitude];
}



/**
 * Checks whether given coordinates are within a given bounding box. By default, the bounding box is British Columbia.
 * @param {*} coordinate in the form [longitude, latitude]
 * @param {number} north 
 * @param {number} south 
 * @param {number} east 
 * @param {number} west 
 * @returns {boolean} returns true if coordinate is within the bounds defined by north, south, east, west
 */
function isLocationInBounds(coordinate, north = 60.5000, south = 47.440567, east = -113.595329, west = -127.915090 ){
    let latitude = coordinate[1];
    let longitude = coordinate[0];
    
    let isLocationInBounds = 
    latitude < north && 
    latitude > south && 
    longitude < east && 
    longitude > west;
    
    return isLocationInBounds;
}


// for storing locatiosn that are within the defined bounds.
let filtered = [];

; (async () => {
    try {
        // Use this version of Data for demonstration
        let response = await axios.get("https://native-land.ca/api/index.php?maps=territories")
        const locationsArray = response.data;
        
        // loop through all locations, locations are represented by a polygon
        for(let locationObj of locationsArray){
            let middleOfPolygon = findMiddleOfPolygon(locationObj); // find middle of polygon
        
            let isInBounds = isLocationInBounds(middleOfPolygon); // boolean
            
            if(isInBounds){
                // console.log(locationObj.geometry.coordinates);
                filtered.push(locationObj);
            }
        
            locationObj.middleOfPolygon = middleOfPolygon; // add to the location object
        }
        console.log(filtered)


        dev_LocationOfInterest.create({
                "name":"Squamish Village",
                "description": "a village",
                "category": "settlement",
                "coordinates": [-119.77844250000001, 39.21491347738127 ]
            })


    } catch (error) {
      console.error(error)
      if (axios.isCancel(error)) {
        return
      }
    }
  })()



// call mongoose functions directly
  











// {
//     id: '161f3c45eda9be9fc05d27d38c833828',
//     type: 'Feature',
//     properties: {
//       Name: 'Wašišiw Ɂítdeʔ (Washoe)',
//       ID: 36614,
//       Slug: 'washoe',
//       description: 'https://native-land.ca/maps/territories/washoe/',
//       color: '#99497D'
//     },
//     geometry: { coordinates: [Array], type: 'Polygon' },
//     middleOfPolygon: [ -119.77844250000001, 39.21491347738127 ]
//   }
  
// {
//     "name":"Squamish Village",
//     "description": "a village",
//     "category": "settlement",
//     "coordinates": [-119.77844250000001, 39.21491347738127 ]
// }
//     ``