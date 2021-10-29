// Import mongoose
import mongoose from "mongoose";

// Import Schema
const { Schema } = mongoose;

const genreSchema = new Schema({
  genre: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("genre", genresSchema);
