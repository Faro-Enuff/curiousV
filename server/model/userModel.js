// Import Mongoose
import mongoose from "mongoose";

// Destructure Schema form mongoose
const { Schema } = mongoose;

const usersSchema = new Schema(
  {
    artistName: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
    // password: {
    //   type: String,
    //   required: true,
    // },
    hash: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Export Module

export default mongoose.model("user", usersSchema);
