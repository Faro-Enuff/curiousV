// Import Mongoose
import mongoose from "mongoose";

// Import Schema
const { Schema } = mongoose;

export const commentsSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("comment", commentsSchema);
