import express from 'express';
import mongoose from 'mongoose';
import {connectDB} from '../connectDB/db.js';
const app=express();
const port=8001;
mongoose.connect("mongodb+srv://")
app.listen(port,()=>{
console.log(`Server is running on PORT ${port}`);
})