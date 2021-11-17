// Import Mongoose
import mongoose from 'mongoose';

// Import Schema
const { Schema } = mongoose;

export const commentInputSchema = new Schema(
  {
    room: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('commentInput', commentInputSchema);
