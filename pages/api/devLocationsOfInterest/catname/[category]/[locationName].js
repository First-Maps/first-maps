import dbConnect from "../../../../../utils/dbConnect"
import dev_LocationOfInterest from '../../../../../models/dev_LocationOfInterest'

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

export default async function devLocationsOfInterestName (req, res) {
  const {
    query: { category, locationName },
    method
  } = req

  switch (method) {
    case 'GET':
      try {
        let name = locationName.split('%20').join(' ')

        const location = JSON.parse(JSON.stringify(await dev_LocationOfInterest.findOne({
          name,
          category
        })))

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
        res.status(200).json({success: true, location})
      } catch (error) {
        res.status(400).json({ success: false, message: error.toString() })
      }
      break
    default:
      res.status(400).json({ success: false, message: "Invalid request method" })
      break
  }
}
