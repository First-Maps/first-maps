// make the contribute write to both databases at the same time. 

import crypto from 'crypto'
import nextConnect from 'next-connect'
import multer from 'multer'
import sharp from 'sharp'
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"

import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

import dbConnect from '../../../utils/dbConnect'
import dev_LocationOfInterest from '../../../models/dev_LocationOfInterest'

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

dbConnect()

export const config = {
  api: {
    bodyParser: false,
  }
}

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const apiRoute = nextConnect({
  onNoMatch(req, res) {
    res.status(400).json({ error: `This route does not exist` })
  },
})

const uploadImage = upload.array('images', 5)

apiRoute.use(uploadImage)

apiRoute.post(async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    // res.status(401).json({ success: false, message: "Not logged in" });
    res.redirect("/auth/signin");
    return;
  }
  try {
    let newLocationObj = {
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      coordinates: req.body.coordinates.split(',').map(Number),
      images: [],
      userEmail: session.user.email,
    }

    if (req.files) {
      const files = req.files
      if (files.length > 5) {
        files = files.slice(0, 5)
      }

      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (!file.mimetype.startsWith('image')) {
          throw new Error('File is not an image')
        }

        const randomImageName = (bytes) => crypto.randomBytes(32).toString('hex')
        const imageName = randomImageName()

        const thumbnail = await sharp(file.buffer)
          .resize({ width: 256, })
          .toFormat('jpeg')
          .jpeg({ quality: 90 })
          .toBuffer()

        const params = {
          Bucket: bucketName,
          Key: imageName,
          Body: thumbnail,
          ContentType: file.mimetype,
        }

        const command = new PutObjectCommand(params)
        await s3.send(command)
        newLocationObj.images.push({ name: imageName })
      }
    }

    const newLocation = await dev_LocationOfInterest.create(newLocationObj)
    res.status(201).json({ message: 'success' })
  } catch (error) {
    console.log(error)
    res.status(400).json({ "error message": error.toString() })
  }
})

export default apiRoute
