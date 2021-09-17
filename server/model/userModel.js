// Import Mongoose
import mongoose from "mongoose";

// Destructure Schema form mongoose
const { Schema } = mongoose;

const usersSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  hobbys: String,
  contacts: {
    email: String,
    mobile: Number,
  },
  socials: {
    instagram: String,
  },
});

// Export Module

export default mongoose.model("user", usersSchema);
