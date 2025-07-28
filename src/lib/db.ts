import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function getProductsByIds(ids: string[]) {
  const objectIds = ids.map((id) => new ObjectId(id));

  const client = await clientPromise;
  const db = client.db(); // optionally pass db name: db('mydbname')

  const products = await db
    .collection('products')
    .find({ _id: { $in: objectIds } })
    .project({
      name: 1,
      price: 1,
      images: 1,
    })
    .toArray();

  return products;
}


