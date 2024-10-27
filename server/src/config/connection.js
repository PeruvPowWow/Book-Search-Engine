import dotenv from 'dotenv';
dotenv.config(); // Load the environment variables
console.log("Environment variables:", process.env); // Add this for debugging
import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in environment variables.");
}
const db = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Database connected.");
        return mongoose.connection;
    }
    catch (error) {
        console.error("Database connection error:", error);
        throw new Error("Database connection failed.");
    }
};
export default db;
