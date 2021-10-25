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
    googleId: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    oAuth: {
      type: Boolean,
      required: true,
    },
    profileImage: {
      type: String,
    },
    hash: {
      type: String,
    },
    salt: {
      type: String,
    },
  },
  { timestamps: true }
);

// Export Module

export default mongoose.model("user", usersSchema);
