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
      res.status(401).json({ success: false, msg: "Could not finde user!" });
    } else {
      const isValid = validPassword(password, user.hash, user.salt);
      if (isValid) {
        const payload = { id: user._id };
        const expiresIn = "30d";
        const token = jwt.sign(payload, process.env.SECRET, {
          expiresIn: expiresIn,
        });
        res.status(200).json({
          success: true,
          token: token,
          expiresIn: expiresIn,
          user: {
            id: user._id,
            artistName: user.artistName,
            email: user.email,
            firstName: user.firstName,
          },
        });
        console.log(token);
      } else {
        res.status(401).json({
          success: false,
          msg: "Password does not match, please try again!",
        });
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
          const payload = { id: user._id };
          const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: "30d",
          });
          res.json({ success: true, user: user, token: token });
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
    // console.log(`user`, req);
    const user = req.user.user;
    const payload = req.user.payload;
    // console.log(user);

    res.json({
      user: {
        id: user._id,
        artistName: user.artistName,
        email: user.email,
        firstName: user.firstName,
      },
      payload: payload,
    });
  }
);

// Export Users Route
export default router;
