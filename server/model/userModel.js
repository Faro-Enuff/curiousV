// Import Mongoose
import mongoose from "mongoose";

// Destructure Schema form mongoose
const { Schema } = mongoose;

const usersSchema = new Schema({
  artistName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

// Export Module

export default mongoose.model("user", usersSchema);
