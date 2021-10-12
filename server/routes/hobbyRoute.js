// Import Express
import express from "express";
// Import Passport
import passport from "passport";
// Import Controller functions
import { getHobby, createHobby } from "../controller/hobbies.js";

// Create Instance of the Express Router
const router = express.Router();

// GET -> showing all the data in DB - call back function 'getHobby' is in "hobbies"

router.get("/", passport.authenticate("jwt", { session: false }), getHobby);

// POST -> Adding data to DB - call back function 'createHobby' is in "hobbies"

router.post("/add", createHobby);

export default router;
