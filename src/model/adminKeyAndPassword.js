import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    require: true,
  },
  photos: {
    type: [String],
  },
});

// Conver "_id" to "id"
adminSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
