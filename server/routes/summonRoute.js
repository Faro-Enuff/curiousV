// Import Express
import express from "express";
// Import Passport
import passport from "passport";
// Import Multer Upload Config
import { upload } from "../Middleware/MulterConfig.js";
// Import Controller functions
import { createSummon, getSummon } from "../controller/summons.js";

// Create Instance of the express router
const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), getSummon);

router.post("/addSummon", upload.single("learningFile"), createSummon);

// Export summon route
export default router;
