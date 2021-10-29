// Import Mongoose
import mongoose from "mongoose";
// Import Subdocument (mongoose expression)
import { hobbiesSchema } from "./hobbyModel.js";

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
    chatroomIds: {
      type: Array,
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
    hobbies: [hobbiesSchema],
  },
  { strict: "throw" },
  { timestamps: true }
);

// Export Module

export default mongoose.model("user", usersSchema);
