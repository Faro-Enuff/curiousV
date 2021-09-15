const mongoose = require("mongoose");
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

// Creating a Moodel  + exporting it
const User = mongoose.model("User", userSchema);

module.exports = User;
