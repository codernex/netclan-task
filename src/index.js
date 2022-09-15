import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/connectDb.js';
import { seed } from './data/seed.js';

const startServer = async (app) => {
  dotenv.config();
  app.use(cors());
  app.use(express.static("public"))

  const db = await connectDB();

  app.get('/seed',seed);


  app.get("/listing", async(req, res, next) => {
    const listing = await db.listings.find().toArray();

    res.status(200).json(listing)
  })

  app.use((err,req,res,next) => {
    res.status(400).json({success:false,message:"Already Have Data"})
  })

  app.listen(process.env.PORT || 5000, () => {
    console.log('Connected');
  });
};

startServer(express());
