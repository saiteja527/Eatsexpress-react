import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://saiteja:password9963@cluster0.lychr3v.mongodb.net/eatsexpress').then(() => {
        console.log('DataBase Connected Successfully');
    });
}