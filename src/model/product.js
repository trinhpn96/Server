import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  price: Number,
  size: String,
  bed: String,
});

// Conver "_id" to "id"
roomSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Product = mongoose.model("Product", roomSchema);

export default Product;
