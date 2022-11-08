import axios from 'axios'
import dbConnect from './dbConnect.js'
import dev_LocationOfInterest from '../models/dev_LocationOfInterest.js'
import * as data from './seedingData';
// import nativeIpsum
import nativeIpsum from './seedingData.js';

dbConnect()


// add categories and description to the markers in the dev_LocationsOfInterest collection
// categories are assigned randomly, description 

// put async await axios code inside function 

export default async function addDataToMarkers(){
	console.log(nativeIpsum)
	return 11
}
