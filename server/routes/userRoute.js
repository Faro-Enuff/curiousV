// Import Express
import express from "express";
// Import users model
import userModel from "../model/userModel.js";
// Import Passport
import passport from "passport";
// Import Passport Utils -> Password Generate function
import { genPassword, validPassword } from "../lib/passwordUtils.js";

// Create Instance of the express router
const router = express.Router();

// 1. Argument here Example: localhost:5000/users/test
// 2. Argument of call back function (res = simple String in JSON format "Test route")

router.get("/all", (req, res) => {
  userModel
    .find()
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

router.get("/login-success", (req, res) => {
  userModel
    .find()
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

// Login Backend Route
router.post(
  "/signin",
  passport.authenticate("local", {
    failureRedirect: "signin",
    successRedirect: "login-success",
    failureFlash: true,
  }),
  (req, res) => {
    console.log(req);
  }
);

// Register Backend Route
router.post("/register", (req, res, next) => {
  console.log(req.body.password);
  const saltHash = genPassword(req.body.password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new userModel({
    artistName: req.body.artistName,
    email: req.body.email,
    firstName: req.body.firstName,
    hash: hash,
    salt: salt,
  });

  newUser.save().then((user) => {
    console.log(user);
  });

  res.redirect("/signin");
});

// Export Users Route
export default router;
