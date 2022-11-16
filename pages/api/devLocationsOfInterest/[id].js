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
      // takes category from params, queries db for all locations in that category

      try {
        let category = id.toString() // get the category from the url
        
        // query the database, return all with the given category
        const locationsByCategory = await dev_LocationOfInterest.find({
          category  
        })

        res.status(200).json({success: true, Results: locationsByCategory}) // return the results

      } catch (error) {
        res.status(400).json({ success: false, message: error.toString() })
      }
      break


    // ***UPDATE CODE BELOW BEFORE USING, THIS IS COPIED FROM SOMEWHERE ELSE **
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
