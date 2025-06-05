import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});

//export default cloudinary;

export const uploadToCloudinary = async (file) => {
    const result = await cloudinary.v2.uploader.upload(file, {
        folder: 'resumes',
    });
    return result.secure_url;
};

export default cloudinary;