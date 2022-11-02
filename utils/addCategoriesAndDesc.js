// import axios from 'axios'
import dbConnect from './dbConnect.js'
import dev_LocationOfInterest from '../models/dev_LocationOfInterest.js'
import * as data from './seedingData.json';

dbConnect()


// add categories and description to the markers in the dev_LocationsOfInterest collection
// categories are assigned randomly, description 

// put async await axios code inside function 

export default async function seed(){
	try {
		// get locations of interest from API
  	    // let response = await axios.get("https://native-land.ca/api/index.php?maps=territories")
        
        console.log(data)
      
  	
  	
  } catch (error) {
  	console.error(error)
    if (axios.isCancel(error)) {
    	return
	  }
  }
}
