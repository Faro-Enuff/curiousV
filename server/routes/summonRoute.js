// Import Express
import express from "express";
// Import Passport
import passport from "passport";
// Import Controller functions
import { createSummon, getSummon } from "../controller/summons.js";

// Create Instance of the express router
const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), getSummon);

router.post("/addSummon", createSummon);

// Export summon route
export default router;
