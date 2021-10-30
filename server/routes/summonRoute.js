// Import Express
import express from "express";
// Import Passport
import passport from "passport";
// Import Multer Upload Config
import { uploadSummonFiles } from "../Middleware/MulterConfig.js";
// Import Controller functions
import * as summonController from "../controller/summons.js";

// Create Instance of the express router
const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  summonController.getSummon
);

router.post(
  "/addSummon",
  passport.authenticate("jwt", { session: false }),
  uploadSummonFiles.single("learningFile"),
  summonController.createSummon
);

// Creations
router.get(
  "/getCreations",
  passport.authenticate("jwt", { session: false }),
  summonController.getCreations
);

router.post(
  "/addCreation",
  passport.authenticate("jwt", { session: false }),
  summonController.createCreation
);

// Export summon route
export default router;
