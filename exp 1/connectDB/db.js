import mongoose from 'mongoose';
export const connectDB = async()=>{
    try {
        console.log("Database is running ");
    }
    catch(error){
        console.log(error);
}