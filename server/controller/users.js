// Import Model
import userModel from "../model/userModel.js";
// Import Passport Utils -> Password Generate function
import { genPassword, validPassword } from "../lib/passwordUtils.js";
// Import Services
import { updateArray } from "../service/service_provider.js";
// Import JWT
import jwt from "jsonwebtoken";

////////////////////////////////////////////////
////////////////////////////////////////////////

// !!! Register user - Password & Email !!!

////////////////////////////////////////////////
////////////////////////////////////////////////

const registerUser = async (req, res) => {
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
          firstName: req.body.artistName,
          email: req.body.email,
          firstName: req.body.firstName,
          oAuth: false,
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

////////////////////////////////////////////////
////////////////////////////////////////////////

// !!! Sign in user - Password & Email !!!

////////////////////////////////////////////////
////////////////////////////////////////////////

const signInUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Clg Email & Password coming from the Req
  console.log("email : >>", email, "password : >>", password);
  try {
    userModel.findOne({ email: email }, (err, user) => {
      if (err) {
        res.json({ error: err });
      }
      if (!user) {
        res
          .status(401)
          .json({ success: false, message: "Could not finde user!" });
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
              _id: user._id,
              artistName: user.artistName,
              email: user.email,
              firstName: user.firstName,
              profileImage: user.profileImage,
            },
          });
          console.log("token :>>", token);
        } else {
          res.status(401).json({
            success: false,
            message: "Password does not match, please try again!",
          });
        }
      }
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

////////////////////////////////////////////////
////////////////////////////////////////////////

// !!! Send authenticated Google User !!!

////////////////////////////////////////////////
////////////////////////////////////////////////

const googleUser = async (req, res) => {
  try {
    let user = req.user;
    const payload = { id: user._id };
    const expiresIn = "30d";
    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: expiresIn,
    });
    res.status(200).json({
      user: {
        _id: user._id,
        artistName: user.artistName,
        email: user.email,
        firstName: user.firstName,
        profileImage: user.profileImage,
      },
      success: true,
      token: token,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

////////////////////////////////////////////////
////////////////////////////////////////////////

// !!! Profile Detail !!!

////////////////////////////////////////////////
////////////////////////////////////////////////

const profileDetail = async (req, res) => {
  const userId = req.user.user._id;
  const payload = req.user.payload;
  try {
    const user = await userModel
      .findById(userId)
      .select(["_id", "artistName", "email", "firstName", "profileImage"])
      .populate("hobbies");

    // console.log("User : >>", user);

    res.json({ user: user });
  } catch (error) {
    res.json({ message: error.message });
  }
};

////////////////////////////////////////////////
////////////////////////////////////////////////

// !!! Specific functions !!!

////////////////////////////////////////////////
////////////////////////////////////////////////

const userArray = async (req, res) => {
  try {
    const userId = req.user.user._id;
    const users = await userModel.find(
      { _id: { $nin: userId } },
      "_id artistName profileImage chatroomIds"
    );
    // console.log("Array of Users : >>", users);

    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
};

const updateImage = async (req, res) => {
  // File Req
  console.log("File : >>", req.file);
  // User Req
  const user = req.user;
  console.log("user : >>", user);

  const userId = user.user._id;
  console.log("userId : >>", userId);

  try {
    // Find User by ID and Update Profile Image
    userModel.findByIdAndUpdate(
      userId,
      {
        profileImage: `${
          "http://localhost:5000/" +
          req.file.fieldname +
          "/" +
          req.file.filename
        }`,
      },
      (err, res) => {
        if (res) {
          console.log("res Profile old (success): >>", res);
        } else {
          console.log("err profileImage : >>", err);
        }
      }
    );
    res.status(200).send("Profile Image successfully updated!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const isUserAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).send("You must login first!");
  }
};

const updateHobby = async (req, res) => {
  // User Req

  const user = req.user;
  // console.log("user : >>", user);

  const userId = user.user._id;
  // console.log("userId : >>", userId);

  const { genre, hobby, level, start, equipment, curiosity } = req.body;

  try {
    const hobbies = {
      genre,
      hobby,
      level,
      start,
      equipment,
      curiosity,
      current: true,
    };

    const data = await updateArray(userModel, userId, "hobbies", hobbies);

    console.log("Data : >>", data);

    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

export {
  registerUser,
  signInUser,
  googleUser,
  updateImage,
  profileDetail,
  isUserAuthenticated,
  userArray,
  updateHobby,
};
