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


                // default parameters set in function d
                // let filteredLocations = filterPolygons(locationsArray, undefined, undefined, undefined, undefined)

                // loop through locationsArray, filter out the coordinates that are not in BC
                // locationsArray.map((location) => { console.log(`polygon`, location.geometry.coordinates)})     
                
                

                res.status(200).json({ success: true, data: filteredLocations })
                // const locationsOfInterest = await dev_LocationOfInterest.find({})
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
