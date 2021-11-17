// Import Mongoose
import mongoose from 'mongoose';
import { commentInputSchema } from './commentInputModel.js';
// Import Schema
const { Schema } = mongoose;

export const commentsSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    message: {
      type: commentInputSchema,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('comment', commentsSchema);
