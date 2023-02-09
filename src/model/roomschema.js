import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    price: Number,
    size: String,
    bed: String,
  });
  export default roomSchema;