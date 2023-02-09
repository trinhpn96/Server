
import mongoose from "mongoose";
import roomSchema from "./roomschema";

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  checkinDay: String,
  checkoutDay: String,
  additionRequest:String,
  address:String,
  adults:String,
  paymentMethod:String,
  rooms:{
    type: String,
    get: function(data) {
      try { 
        return JSON.parse(data);
      } catch(error) { 
        return data;
      }
    },
    set: function(data) {
      return JSON.stringify(data);
    }
  },
});

// Conver "_id" to "id"
orderSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
