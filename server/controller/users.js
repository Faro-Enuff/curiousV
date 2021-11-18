// Import Model
import userModel from '../model/userModel.js';
import collectionModel from '../model/collectionModel.js';
// Import Passport Utils -> Password Generate function
import { genPassword, validPassword } from '../lib/passwordUtils.js';
// Import Services
import * as services from '../service/service_provider.js';
// Import JWT
import jwt from 'jsonwebtoken';
import summonModel from '../model/summonModel.js';

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
        res.send('Artist name exists already!');
      } else {
        const saltHash = genPassword(req.body.password);

        const salt = saltHash.salt;
        const hash = saltHash.hash;

        // Create & Save User

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
              expiresIn: '30d',
            });
            res.json({ success: true, user: user, token: token });
          })
          .catch((err) => res.send(err));

        // Create & Save Collection for summons

        const newCollection = new collectionModel({
          artist: newUser._id,
        });

        newCollection
          .save()
          .then((collection) => {
            console.log('Collection Created : >>', collection);
          })
          .catch((err) => console.log('Collection Error : >> ', err));

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
  console.log('email : >>', email, 'password : >>', password);
  try {
    userModel.findOne({ email: email }, (err, user) => {
      if (err) {
        res.json({ error: err });
      }
      if (!user) {
        res
          .status(401)
          .json({ success: false, message: 'Could not finde user!' });
      } else {
        const isValid = validPassword(password, user.hash, user.salt);
        if (isValid) {
          const payload = { id: user._id };
          const expiresIn = '30d';
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
          console.log('token :>>', token);
        } else {
          res.status(401).json({
            success: false,
            message: 'Password does not match, please try again!',
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
    const expiresIn = '30d';
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
  const userId = services.getAuthenticatedUser(req);
  // console.log("userId : >>", userId);
  const payload = req.user.payload;
  try {
    const user = await userModel
      .findById(userId)
      .select([
        '_id',
        'artistName',
        'email',
        'firstName',
        'profileImage',
        'chatroomIds',
      ])
      .populate('hobbies');

    // console.log("User : >>", user);

    res.json({ user: user });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const profileDetailSelected = async (req, res) => {
  const userId = req.params.userId;
  // console.log("userId : >>", userId);

  try {
    const user = await userModel
      .findById(userId)
      .select([
        '_id',
        'artistName',
        'email',
        'firstName',
        'profileImage',
        'chatroomIds',
      ])
      .populate('hobbies');

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

// Get Array of all Users in Application (excl. logged in User)

const userArray = async (req, res) => {
  try {
    const userId = services.getAuthenticatedUser(req);
    // console.log("userId : >>", userId);
    const users = await userModel.find(
      { _id: { $nin: userId } },
      '_id artistName profileImage chatroomIds'
    );
    // console.log("Array of Users : >>", users);

    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
};

// Update User Profile Image

const updateImage = async (req, res) => {
  // File Req
  console.log('File : >>', req.file);
  // User Req
  const userId = services.getAuthenticatedUser(req);
  // console.log("userId : >>", userId);

  try {
    // Find User by ID and Update Profile Image
    const newProfile = await userModel
      .findByIdAndUpdate(
        userId,
        {
          profileImage: `${
            'http://localhost:5000/' +
            req.file.fieldname +
            '/' +
            req.file.filename
          }`,
        },
        { runValidators: true, new: true }
      )
      .exec();
    console.log('New Profile : >>', newProfile);
    res.status(200).json({ newProfile });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Users Hobby

const addHobby = async (req, res) => {
  // User Req
  const userId = services.getAuthenticatedUser(req);
  // console.log("userId : >>", userId);
  const { genre, hobbyTitle, level, start, equipment, curiosity } = req.body;

  try {
    const hobbies = {
      genre,
      hobbyTitle,
      level,
      start,
      equipment,
      curiosity,
      current: true,
    };

    ////////////////////////////
    // Update old, existing Hobby Model to current = false
    userModel.findById(
      {
        _id: userId,
        hobbies: {
          $elemMatch: {
            current: 'true',
          },
        },
      },
      (err, doc) => {
        if (doc) {
          console.log(doc);
          const oldUserHobby = doc.hobbies[doc.hobbies.length - 1];
          // Change
          if (doc.hobbies.length > 0) {
            oldUserHobby.current = false;
          }

          // Save Changes
          doc.save((err) => {
            if (err) {
              console.log('Hobbies Current Change Error : >>', err);
            }
            console.log('Hobbies was updated succesfully');
            // res.json({ Success: 'The Hobby was updated successfully!!!' });
          });
        }
        if (err) {
          console.log('Error: There is no Hobby to update!!');
        }
      }
    );
    ////////////////////////

    const userHobby = await services.updateArray(
      userModel,
      '_id',
      userId,
      'hobbies',
      hobbies
    );

    console.log('User/Hobby Data : >>', userHobby);

    res.status(200).json({ userHobby });
  } catch (error) {
    console.log('User/Hobby Error : >>', error);
    res.json({ message: error.message });
  }
};

// TODO create a Delete Hobby Controller incl. Route for that

// Get Users Hobby including populated summons

const getUserHobby = async (req, res) => {
  // User Req
  const userId = services.getAuthenticatedUser(req);
  console.log('userId : >>', userId);

  try {
    const data = await userModel
      .findById({
        _id: userId,
        hobbies: {
          $elemMatch: {
            current: 'true',
          },
        },
      })
      .select('artistName hobbies');

    console.log('UserHobby : >> ', data);
    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

export {
  registerUser,
  signInUser,
  googleUser,
  updateImage,
  profileDetail,
  profileDetailSelected,
  userArray,
  addHobby,
  getUserHobby,
};
