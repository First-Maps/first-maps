// API routes, you give the name of the location, it returns the category

import dbConnect from "../../../../utils/dbConnect"
import dev_LocationOfInterest from '../../../../models/dev_LocationOfInterest'

dbConnect()

export default async function getCategoryFromName (req, res) {
    const {
        query: { locationName },
        method
    } = req
    
    switch (method) {
        case 'GET':
        // takes category from params, queries db for all locations in that category
    
        try {
            let locationNameStr = locationName.toString() // get the category from the url
            
            // query the database, return all with the given category
            const location = await dev_LocationOfInterest.findOne({
                name: locationNameStr
            })

            // here, return either the entire objecr, or just the category

            // TODO: check if location is null, if so, return error message
            // TODO: seend bcak the location, on /explore/index call this route
            // TODO: take the category name and redirect to /explore/[categoryName]/[locationName]

            console.log(location.category)
    
            res.status(200).json({success: true, Results: `the category of this location is: ${location.category}`}) // return the results
    
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: error.toString() })
        }
        break
    

        default:
            res.status(400).json({ success: false, message: "This route does not exist" })
            break
    }
}