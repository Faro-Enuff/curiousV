// Import Mongoose
import mongoose from "mongoose";

// Import Schema
const { Schema } = mongoose;

const hobbiesSchema = new Schema(
  {
    genre: {
      type: String,
      required: true,
    },
    hobby: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    equipment: {
      type: String,
      required: true,
    },
    curiosity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Hobby", hobbiesSchema);
