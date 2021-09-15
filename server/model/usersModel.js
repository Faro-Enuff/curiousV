// Import Mongoose
const mongoose = require("mongoose");
// Destructure Schema form mongoose
const { Schema } = mongoose;

const userSchema = new Schema({
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

// Creating a Moodel

const User = mongoose.model("User", userSchema);

// Export

module.exports = User;
