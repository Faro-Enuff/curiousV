// Import Model
import userModel from "../model/userModel.js";
// Import Passport Utils -> Password Generate function
import { genPassword, validPassword } from "../lib/passwordUtils.js";
// Import JWT
import jwt from "jsonwebtoken";

export const signInUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Clg Email & Password coming from the Req
  console.log("email :>>", email, "password :>>", password);
  try {
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
          console.log("token :>>", token);
        } else {
          res.status(401).json({
            success: false,
            msg: "Password does not match, please try again!",
          });
        }
      }
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const registerUser = async (req, res) => {
  try {
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
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const profileDetail = async (req, res) => {
  const user = req.user.user;
  const payload = req.user.payload;
  try {
    res.json({
      user: {
        id: user._id,
        artistName: user.artistName,
        email: user.email,
        firstName: user.firstName,
      },
      payload: payload,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateImage = async (req, res) => {
  // File
  console.log(req.file);
  try {
    const user = req.user;
    console.log(user);
    const userId = user.user._id;
    console.log(userId);
    const query = { _id: userId };
    console.log(query);
    userModel.updateOne(
      query,
      { profileImage: req.file.filename },
      (err, res) => {
        console.log("err : >>", err);
        console.log("res : >>", res);
      }
    );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
