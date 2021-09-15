// Import Mongoose
const mongoose = require("mongoose");
// Destructure Schema form mongoose
const { Schema } = mongoose;

const summonSchema = new Schema({
  exercise: String,
  duration: Number,
  learningSource: String,
});

// Creating a Model

const Summon = mongoose.model("Summon", summonSchema);

// Export

module.exports = Summon;
