// Import Express
import express from "express";
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
  googleUser,
  updateImage,
} from "../controller/users.js";
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

router.post("/register", registerUser);

////////////////////////////
////////////////////////////

// Login Backend Route

////////////////////////////
////////////////////////////

router.post("/signin", signInUser);

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

router.get("/google/signIn", isUserAuthenticated, googleUser);

////////////////////////////
////////////////////////////

// Profile Data Route - protected Routes

////////////////////////////
////////////////////////////

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  profileDetail
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
  updateImage
);

// Export Users Route
export default router;

// ////////////////////
// // Test Route -> Maybe modify later if there is any UseCase for Client
// ////////////////////

// router.get(
//   "/loggedIn",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     userModel
//       .findOne({ _id: id })
//       .then((files) => {
//         res.send(files);
//       })
//       .catch((err) => console.log(err));
//   }
// );
