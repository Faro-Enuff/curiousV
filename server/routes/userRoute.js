// Import Express
import express from "express";
// Import Passport
import passport from "passport";
// Import Multer Upload Config
import { uploadProfileImages } from "../Middleware/MulterConfig.js";
// Import Controller Functions
import * as userController from "../controller/users.js";
// Import .env
import dotenv from "dotenv";
dotenv.config();
// Create Instance of the express router
const router = express.Router();

////////////////////////////
////////////////////////////

// Register Backend Route

////////////////////////////
////////////////////////////

router.post("/register", userController.registerUser);

////////////////////////////
////////////////////////////

// Login Backend Route

////////////////////////////
////////////////////////////

router.post("/signin", userController.signInUser);

////////////////////////////
////////////////////////////

// Google Auth

////////////////////////////
////////////////////////////

const successLoginUrl = "http://localhost:3000/google/success";
const errorLoginUrl = "http://localhost:3000/google/failure";

// Check for Google User - Authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
// Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureMessage: "Cannot login to Google, please try again later!",
    successMessage: "You are successfully logged in !",
    failureRedirect: errorLoginUrl,
    successRedirect: successLoginUrl,
  })
);

// Authorize authenticated Google account -> create JWT Token

router.get(
  "/google/signIn",
  userController.isUserAuthenticated,
  userController.googleUser
);

////////////////////////////
////////////////////////////

// Profile Data Route - protected Routes

////////////////////////////
////////////////////////////

// Specific User
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  userController.profileDetail
);

// Array of all Users !!! besides the logged in user !!!
router.get(
  "/allUsers",
  passport.authenticate("jwt", { session: false }),
  userController.userArray
);
////////////////////////////
////////////////////////////

// Update Profile Picture Route

////////////////////////////
////////////////////////////

router.post(
  "/uploadProfileImage",
  passport.authenticate("jwt", { session: false }),
  uploadProfileImages.single("profileImage"),
  userController.updateImage
);

////////////////////////////
////////////////////////////

// Update Hobby

////////////////////////////
////////////////////////////

router.post(
  "/addHobby",
  passport.authenticate("jwt", { session: false }),
  userController.updateHobby
);

// Export Users Route
export default router;
