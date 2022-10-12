// this will route to :     /api/locationsOfInterest

import dbConnect from "../../../utils/dbConnect";
import LocationOfInterest from '../../../models/LocationOfInterest';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                // find all locationsOfInterest
                const locationsOfInterest = await LocationOfInterest.find({})
                res.status(200).json({ success: true, data: locationsOfInterest })
            } catch(error){
                res.status(400).json({ "error message" : error })
            }
            break;

        case 'POST':
            try {
                const locationOfInterest = await LocationOfInterest.create(req.body)
                res.status(201).json({ success: true, data: locationOfInterest })
            } catch(error){
                res.status(400).json({ "error message": error })
            }
            break;
        default:
            res.status(400).json({ success: false, message: "This route does not exist" })
    }
}
