import dbConnect from "../../../utils/dbConnect"
import seed from '../../../utils/addLocationsFromAPI'

dbConnect()


export default async function seedDatabase (req, res) {
    const { method } = req

    switch (method) {
        case 'POST':
            try {
                // seed()
                console.log(`un-comment the "seed()" method in /pages/api/seedDatabase to use the seed method`)
                res.status(201).json({ success: true, results: `un-comment the "seed()" method in /pages/api/seedDatabase to use the seed method` })
            } catch (error) {
                res.status(400).json({ "error message": error })
            }
            break
        default:
            res.status(400).json({ success: false, message: "This route does not exist" })
    }
}
