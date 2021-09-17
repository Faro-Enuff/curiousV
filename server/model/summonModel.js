// Import Mongoose
import mongoose from "mongoose";
// Destructure Schema form mongoose
const { Schema } = mongoose;

const summonsSchema = new Schema({
  exercise: String,
  duration: Number,
  learningSource: String,
});

// Export Module

export default mongoose.model("summon", summonsSchema);
