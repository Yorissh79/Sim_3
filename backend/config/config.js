import mongoose from 'mongoose'
import {configDotenv} from "dotenv";

configDotenv()

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log(error);
    }
}