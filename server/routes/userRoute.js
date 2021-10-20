// Import Express
import express from "express";
// Import users model
import userModel from "../model/userModel.js";
// Import Passport
import passport from "passport";
// Import Multer Upload Config
import { uploadProfileImages } from "../Middleware/MulterConfig.js";
// Import Controller Functions
import {
  isUserAuthenticated,
  profileDetail,
  registerUser,
  signInUser,
  test,
  updateImage,
} from "../controller/users.js";
// Import .env
import dotenv from "dotenv";
import { jwtStrategy } from "../Middleware/PassportConfig.js";
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
  uploadProfileImages.single("profileImage"),
  updateImage
);

// Google Auth
const successLoginUrl = "http://localhost:3000/google/success";
const errorLoginUrl = "http://localhost:3000/signin";

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureMessage: "Cannot login to Google, please try again later!",
    successMessage: "You are successfully logged in !",
    failureRedirect: errorLoginUrl,
    successRedirect: successLoginUrl,
  })
);

router.get("/google/signIn", isUserAuthenticated, test);

// Export Users Route
export default router;
