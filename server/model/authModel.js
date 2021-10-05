// Import Mongoose
import mongoose from "mongoose";

// Destructure Schema form mongoose
const { Schema } = mongoose;

const authsSchema = new Schema(
  {
    googleId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Export Module

export default mongoose.model("auth", authsSchema);
