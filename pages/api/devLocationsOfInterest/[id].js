// this file takes care of dynamic routes

import dbConnect from "../../../utils/dbConnect"
import dev_LocationOfInterest from '../../../models/dev_LocationOfInterest'

dbConnect()

export default async function devLocationsOfInterestId (req, res) {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case 'GET':
      try {
        let category = id.toString() // get the category from the url

        const locationsByCategory = await dev_LocationOfInterest.find({category : category}).limit(10) // query the database, return all with the given category

        res.status(200).json({success: true, Results: locationsByCategory}) // return the results

      } catch (error) {
        res.status(400).json({ success: false, message: error.toString() })
      }
      break

    // methods below are copied, they need to be updated before they can be used
    // case 'PUT':
    //   try{
    //     const location = await devLocationsOfInterest.findByIdAndUpdate(id, req.body, {
    //       new: true,
    //       runValidators: true
    //     })

    //     if (!location) {
    //       return res.status(400).json({ success: false })
    //     }
    //     res.status(200).json({success: true, Results: location})

    //   } catch(error){
    //     res.status(400).json({ success: false })
    //   }
    //   break
    
    // case 'DELETE':
    //   try {
    //     // delete one location
    //     const deletedLocation = await LocationOfInterest.deleteOne({ _id: id })

    //     if (!deletedLocation) {
    //       return res.status(400).json({ success: false })
    //     }
    //     res.status(200).json({success: true, Results: {}})

    //   } catch(error){
    //     res.status(400).json({success: false})
    //   }
    //   break
    
    default:
      res.status(400).json({ success: false, message: "method not allowed" })
      break
  }
}
