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

////////////////////////////
////////////////////////////

// Summon to Create Routes

////////////////////////////
////////////////////////////

router.get(
  "/getSummons",
  passport.authenticate("jwt", { session: false }),
  summonController.getSummons
);

router.post(
  "/addSummon",
  passport.authenticate("jwt", { session: false }),
  uploadSummonFiles.single("learningFile"),
  summonController.createSummon
);

router.post(
  "/deleteSummon",
  passport.authenticate("jwt", { session: false }),
  summonController.deleteSummon
);

////////////////////////////
////////////////////////////

// Creations Routes

////////////////////////////
////////////////////////////

router.get(
  "/getCreations",
  passport.authenticate("jwt", { session: false }),
  summonController.getCreations
);

router.post(
  "/addCreation",
  passport.authenticate("jwt", { session: false }),
  uploadSummonFiles.single("learningFile"),
  summonController.createCreation
);

////////////////////////////
////////////////////////////

// Comment Route

////////////////////////////
////////////////////////////

router.post(
  "/createComment",
  passport.authenticate("jwt", { session: false }),
  summonController.createComment
);

router.post(
  "/deleteComment",
  passport.authenticate("jwt", { session: false }),
  summonController.deleteComment
);

// Export summon route
export default router;
