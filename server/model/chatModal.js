// Import Mongoose
import mongoose from "mongoose";

// Import Schema
const { Schema } = mongoose;

const chatroomsSchema = new Schema({
  artistNames: {
    type: Array,
    required: true,
  },
  messages: {
    type: Array,
  },
});

export default mongoose.model("Chatroom", chatroomsSchema);
