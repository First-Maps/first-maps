import dbConnect from "../../../utils/dbConnect"
import seed from '../../../utils/addLocationsFromAPI'

dbConnect()


export default async function seedDatabase (req, res) {
    const { method } = req

    switch (method) {
        case 'POST':
            try {
                seed()
                res.status(201).json({ success: true, Results: `Database Seeding Was Successful` })
            } catch (error) {
                res.status(400).json({ "error message": error })
            }
            break
        default:
            res.status(400).json({ success: false, message: "This route does not exist" })
    }
}
