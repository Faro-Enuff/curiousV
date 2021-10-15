// Import Express
import express from "express";
// Import users model
import userModel from "../model/userModel.js";
// Import Passport
import passport from "passport";
// Import Multer Upload Config
import { upload } from "../Middleware/MulterConfig.js";
// Import Controller Functions
import {
  profileDetail,
  registerUser,
  signInUser,
  updateImage,
} from "../controller/users.js";
// Import .env
import dotenv from "dotenv";
dotenv.config();
// Create Instance of the express router
const router = express.Router();

////////////////////
// Test Route -> Maybe modify later if there is any UseCase for Client
////////////////////

router.get(
  "/loggedIn",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    userModel
      .findOne({ _id: id })
      .then((files) => {
        res.send(files);
      })
      .catch((err) => console.log(err));
  }
);

// Login Backend Route
router.post("/signin", signInUser);

// Register Backend Route
router.post("/register", registerUser);

// Protected Routes

// Profile Data Route
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  profileDetail
);

// Update Profile Picture Route
router.post(
  "/uploadProfileImage",
  passport.authenticate("jwt", { session: false }),
  upload.single("profileImage"),
  updateImage
);

// Export Users Route
export default router;
