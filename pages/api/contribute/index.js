// make the contribute write to both databases at the same time. 

import dbConnect from "../../../utils/dbConnect";
import dev_LocationOfInterest from '../../../models/dev_LocationOfInterest';

dbConnect();


export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const locationsOfInterest = await dev_LocationOfInterest.find({})
                res.status(200).json({ success: true, data: locationsOfInterest })
            } catch (error) {
                res.status(400).json({ "error message": error.toString() })
            }
            break;

        case 'POST':
            try {
                let newLocationObj = {
                    name: req.body.name,
                    description: req.body.description,
                    category: req.body.category,
                    coordinates: req.body.coordinates,
                }
                const newLocation = await dev_LocationOfInterest.create(newLocationObj)
                res.status(201).json({ success: true, data: newLocation })
            } catch (error) {
                res.status(400).json({ "error message": error.toString() })
            }
            break;
        default:
            res.status(400).json({ success: false, message: "This route does not exist" })
    }
}
