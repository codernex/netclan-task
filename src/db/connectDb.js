import dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from 'mongodb';

export default async function connectDB(){
  const client = await MongoClient.connect(process.env.DB_URL_DEV || '');
  const db = client.db(process.env.DB_NAME);

  if (!db.collection('listings')) {
    await db.createCollection('listings');
  }

  return {
    listings: db.collection('listings')
  };
}
