// Import Mongoose
import mongoose from "mongoose";
// Import Subdocument (mongoose expression)
import { commentsSchema } from "./commentModel.js";
import { creationsSchema } from "./creationModel.js";

// Destructure Schema form mongoose
const { Schema } = mongoose;

const summonsSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
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
    summonToCreate: [creationsSchema],
    reposts: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    comments: [commentsSchema],
  },
  { timestamps: true }
);

// Export Module

export default mongoose.model("summon", summonsSchema);
