import dbConnect from "../../../utils/dbConnect"
import dev_LocationOfInterest from '../../../models/dev_LocationOfInterest'

import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"

dbConnect()

const bucketName = process.env.S3_BUCKET_NAME
const region = process.env.S3_BUCKET_REGION
const accessKeyId = process.env.S3_ACCESS_KEY
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY

const s3 = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey
  }
})

export default async function devLocationsOfInterest (req, res) {
  const { method } = req

  switch (method) {
    case "GET":
      try {
        const locationsOfInterest = JSON.parse(JSON.stringify(await dev_LocationOfInterest.find({})))
        for (const location of locationsOfInterest) {
          const images = location.images
          if (images.length > 0) {
            for (let image of images) {
              const command = new GetObjectCommand({
                Bucket: bucketName,
                Key: image.name
              })
              image.imageLink = await getSignedUrl(s3, command, { expiresIn: 7200 })
            }
          }
        }

        res.status(200).json({ success: true, results: locationsOfInterest })
      } catch (error) {
        res.status(400).json({ "error message": error.toString() })
      }
      break

    case "POST":
      try {
        // validate the request body
        if (
          req.body.name === undefined 
          || req.body.name === null 
          || req.body.name === ""
        ) {
          res.status(400).json({ "error message": "name is required" })
          break
        } else if (
          req.body.coordinates === undefined 
          || req.body.coordinates === null 
          || req.body.coordinates === ""
        ) {
          res.status(400).json({ "error message": "coordinates are required" })
          break
        } else if (req.body.coordinates.length !== 2) {
          res.status(400).json({
            "error message": "coordinates must be an array of TWO numbers",
          })
          break
        } else if (
          typeof req.body.coordinates[0] !== "number" 
          || typeof req.body.coordinates[1] !== "number"
        ) {
          res.status(400).json({
            "error message": "coordinates must be an array of two NUMBERS",
          })
          break
        } else if (
          req.body.description === undefined 
          || req.body.description === null 
          || req.body.description === ""
        ) {
          res.status(400).json({ "error message": "description is required" })
          break
        } else if (
          req.body.category === undefined 
          || req.body.category === null 
          || req.body.category === ""
        ) {
          res.status(400).json({ "error message": "category is required" })
          break
        }

        // formatting info from req.boy so that it can be passed into the mongoose function
        let reqBodyObj = {
          name: req.body.name,
          description: req.body.description,
          category: req.body.category,
          coordinates: req.body.coordinates,
        }

        await dev_LocationOfInterest.create(reqBodyObj)

        res.status(201).json({ success: true, results: reqBodyObj })
      } catch (error) {
        res.status(400).json({ "error message": error.toString() })
      }
      break

      default:
      res.status(400).json({
        success: false, message: "This route does not exist" 
      })
  }
}
