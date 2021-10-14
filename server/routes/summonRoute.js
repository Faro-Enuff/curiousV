// Import Express
import express from "express";
// Import Passport
import passport from "passport";
// Import Multer
import multer from "multer";
// Import Controller functions
import { createSummon, getSummon } from "../controller/summons.js";

// Define Multer Storage
const storage = multer.diskStorage({
  // Destination
  destination: (req, file, cb) => {
    cb(null, "./Uploads");
  },
  // TODO Filename (cb, maybe use file.originalname for naming)
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

// Upload Parameters for multer
const upload = multer({
  storage: storage,
  limits: { fieldSize: 1024 * 1024 * 3 },
});

// Create Instance of the express router
const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), getSummon);

router.post("/addSummon", upload.single("learningFile"), createSummon);

// Export summon route
export default router;
