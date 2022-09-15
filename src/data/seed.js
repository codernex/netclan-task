import data from './jsondata.json' assert { type: 'json' };
import connectDB from '../db/connectDb.js';

export const seed = async (req,res,next) => {
  const db = await connectDB();

    if ((await db.listings.find().toArray()).length === 0) {
      for (let i = 0; i < data.length; i++) {
        db.listings.insertOne(data[i]);
      }
      return res.status(200).json({message:"Seeding Successfull"})
    } else {
     return next(new Error('Already Have Data'));
    } 
};


