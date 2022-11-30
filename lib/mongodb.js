import { MongoClient } from 'mongodb';

if (!process.env.MONGO_CONNECTION_STRING) {
  throw new Error('Invalid/Missing environment variable: "MONGO_CONNECTION_STRING"');
}

const uri = process.env.MONGO_CONNECTION_STRING;
const options = {};

let client;
let clientPromise;


if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options)
  global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise

export default clientPromise