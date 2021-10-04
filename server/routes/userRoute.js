// Import Express
import express from "express";
// Import users model
import userModel from "../model/userModel.js";
// Import Passport
import passport from "passport";
// Import Passport Utils -> Password Generate function
import { genPassword, validPassword } from "../lib/passwordUtils.js";
// Import JWT
import jwt from "jsonwebtoken";
// Import .env
import dotenv from "dotenv";
dotenv.config();
// Create Instance of the express router
const router = express.Router();

// 1. Argument here Example: localhost:5000/users/test
// 2. Argument of call back function (res = simple String in JSON format "Test route")

router.post("/test", (req, res) => {
  console.log(req.body);
});

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
router.post("/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);

  userModel.findOne({ email: email }, (err, user) => {
    if (err) {
      res.json({ error: err });
    }
    if (!user) {
      res.send("User doesn't exist!");
    } else {
      const isValid = validPassword(password, user.hash, user.salt);
      if (isValid) {
        const options = { id: user._id };
        const token = jwt.sign(options, process.env.SECRET, {
          expiresIn: "2h",
        });
        res.json({
          success: true,
          token: token,
        });
        console.log(token);
      } else {
        res.send("Password does not match, please try again!");
      }
    }
  });
});

// Register Backend Route
router.post("/register", (req, res) => {
  console.log(req.body.password);

  userModel.findOne({ artistName: req.body.artistName }, (err, user) => {
    if (err) {
      res.json({ error: err });
    }
    if (user) {
      res.send("Artist name exists already!");
    } else {
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

      newUser
        .save()
        .then((user) => {
          res.send(user);
        })
        .catch((err) => res.send(err));

      // res.redirect("/signin");
    }
  });
});

// Protected User Route

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send(req.user);
  }
);

// Export Users Route
export default router;
