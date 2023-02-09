import mongoose from "mongoose";
import roomSchema from "./roomschema";


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
