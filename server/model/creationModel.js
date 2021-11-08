// Import Mongoose
import mongoose from 'mongoose';
// Import Subdocument (mongoose expression)
import { commentsSchema } from './commentModel.js';

// Import Schema
const { Schema } = mongoose;

export const creationsSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    summon: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'summon',
    },
    file: {
      type: String,
      required: true,
    },
    funFactor: {
      type: Number,
      required: true,
    },
    approxTimeInvestment: {
      type: Number,
      required: true,
    },

    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    comments: [commentsSchema],
  },
  { timestamps: true }
);

export default mongoose.model('creation', creationsSchema);
