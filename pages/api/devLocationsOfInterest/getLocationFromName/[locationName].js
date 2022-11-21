// API routes, you give the name of the location, it returns the category

import dbConnect from "../../../../utils/dbConnect"
import dev_LocationOfInterest from '../../../../models/dev_LocationOfInterest'

dbConnect()

export default async function getLocationFromName(req, res) {
	const {
		query: { locationName },
		method
	} = req

	switch (method) {
		case 'GET':
			// Takes the name of the location from params, queries db for the location

			try {
				let locationNameStr = locationName.toString() // get the category from the url

				// query the database, return the location with the given name
				const location = await dev_LocationOfInterest.findOne({
					name: locationNameStr
				})


				// if that location doesn't exist, send error message
				if (!location) {
					res.status(400).json({ success: false, message: "No location with that name found" })
					return
				}

				// TODO: Data validation so that no two locations can have the same name
				res.status(200).json({ success: true, results: location }) 
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