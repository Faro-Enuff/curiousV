// Import Express
import express from "express";
// Import Passport
import passport from "passport";
// Import Controller functions
import * as hobbyController from "../controller/hobbies.js";

// Create Instance of the Express Router
const router = express.Router();

// GET -> showing all the data in DB - call back function 'getHobby' is in "hobbies"

router.get(
  "/getUserHobby",
  passport.authenticate("jwt", { session: false }),
  hobbyController.getHobby
);

// POST -> Adding data to DB - call back function 'createHobby' is in "hobbies"

router.post("/add", hobbyController.createHobby);

export default router;
