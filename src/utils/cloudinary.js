import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //after successful upload
    console.log("File Uploaded! ", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //removes the locally uploaded file on server if operation fails
    return null;
  }
};

export { uploadOnCloudinary };
