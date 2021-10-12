// Import Mongoose
import mongoose from "mongoose";

// Import Schema
const { Schema } = mongoose;

const creationsSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  summonId: {
    type: String,
    unique: true,
    required: true,
  },
  summonTitle: {
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
  file: {
    date: Buffer,
    contentType: String,
  },
});

export default mongoose.model("Creation", creationsSchema);
