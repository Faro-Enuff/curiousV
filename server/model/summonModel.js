// Import Mongoose
import mongoose from "mongoose";
// Destructure Schema form mongoose
const { Schema } = mongoose;

const summonsSchema = new Schema({
  assignmentName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  sourceMedia: {
    type: String,
  },
  summonToCreate: {
    type: Boolean,
  },
});

// Export Module

export default mongoose.model("summon", summonsSchema);
