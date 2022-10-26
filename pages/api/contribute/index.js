// make the contribute write to both databases at the same time. 

import dbConnect from "../../../utils/dbConnect"
import dev_LocationOfInterest from '../../../models/dev_LocationOfInterest'

dbConnect()


export default async (req, res) => {
    const { method } = req

    switch (method) {
        case 'POST':
            try {
                let newLocationObj = {
                    name: req.body.name,
                    description: req.body.description,
                    category: req.body.category,
                    coordinates: req.body.coordinates,
                }
                const newLocation = await dev_LocationOfInterest.create(newLocationObj)
                res.status(201).json({ success: true, Results: newLocation })
            } catch (error) {
                res.status(400).json({ "error message": error.toString() })
            }
            break
        default:
            res.status(400).json({ success: false, message: "This route does not exist" })
    }
}
