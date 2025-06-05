import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected successfully to ${connection.connection.host}`);
        console.log('MongoDB database:', connection.connection.name);
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        console.error('Connection URI:', process.env.MONGO_URI);
        console.error('Error stack:', error.stack);
        process.exit(1);
    }
}
export default connectDB;