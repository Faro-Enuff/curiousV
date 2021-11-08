// Import Mongoose
import mongoose from 'mongoose';

// Import Schema
const { Schema } = mongoose;

export const hobbiesSchema = new Schema(
  {
    genre: {
      type: String,
      required: true,
    },
    hobbyTitle: {
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
    current: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
  { strict: 'throw' }
);

export default mongoose.model('hobby', hobbiesSchema);
