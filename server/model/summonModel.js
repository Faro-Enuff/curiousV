// Import Mongoose
import mongoose from "mongoose";
// Destructure Schema form mongoose
const { Schema } = mongoose;

const summonsSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  assignmentTitle: {
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
  learningSource: {
    type: String,
    required: true,
  },
  learningMaterial: {
    type: String,
  },
  learningFile: {
    type: String,
  },
  complexity: {
    type: String,
    required: true,
  },
  summonToCreate: {
    type: Boolean,
  },
});

// Export Module

export default mongoose.model("summon", summonsSchema);
