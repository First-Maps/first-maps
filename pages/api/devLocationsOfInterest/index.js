// this will route to :     /api/locationsOfInterest

import dbConnect from "../../../utils/dbConnect";
import dev_LocationOfInterest from '../../../models/dev_LocationOfInterest';
import axios from 'axios'
// import testFunc from helper.js
import findMiddleOfPolygon from '../../../utils/findMiddle'
import filterPolygons from "../../../utils/filterLocations";


dbConnect();


export default async (req, res) => {   
    const { method } = req;    

    switch (method) {
        case 'GET':
            try {
                // send axios request to nativelands api
                const response = await axios.get('https://native-land.ca/api/index.php?maps=territories');
                const locationsArray = response.data;
                
                // loop through all locations, locations are represented by a polygon
                for(let locationObj of locationsArray){
                    let middleOfPolygon = findMiddleOfPolygon(locationObj); // find middle of polygon
                    locationObj.middleOfPolygon = middleOfPolygon; // add to the location object
                }

                // ****  for testing, compare middleCoordinates with polygon coordinates
                // console.log(locationsArray[0])
                // console.log(locationsArray[0].geometry.coordinates)

                
                /**
                 * TODO: 
                 * 
                 * 1. write the polygons to the database
                 *      since the api data likely won't change, we can just run it on once
                 *      but store the code somewhere so we can run it again if we need to. 
                 * 
                 * 
                 * 2. Alter the filter function, or maybe mongoose has a way to do this,
                 *     to filter out the polygons that are not in the designated area
                 * 
                 * 3. Get the filtered polygons and send them to the front end
                 * 
                 * 4. stretch goal, maybe after midterm presentations: 
                 *      filter the locations based on given routes
                 * 
                 * ***** Move this out of the route, and into a helper function
                 */
                

                // const locationsOfInterest = await dev_LocationOfInterest.find({})
                res.status(200).json({ success: true, data: `length of locationsArray: ${locationsArray.length}`})
            } catch(error){
                res.status(400).json({ "error message" : error.toString() })
            }
            break;

        case 'POST':
            try {
                const locationOfInterest = await dev_LocationOfInterest.create(req.body)
                res.status(201).json({ success: true, data: locationOfInterest })
            } catch(error){
                res.status(400).json({ "error message": error })
            }
            break;
        default:
            res.status(400).json({ success: false, message: "This route does not exist" })
    }
}
