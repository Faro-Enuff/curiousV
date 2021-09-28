// Import Passport Library
import passport from "passport";

// Import Password Utils - Password Validation Function
import { validPassword } from "../lib/passwordUtils.js";

// Import Local Strategy
import { Strategy as LocalStrategy } from "passport-local";

// Import DB
import { connection } from "../server.js";
import User from "../model/userModel.js";
// const LocalStrategy = PassportStrategy.Strategy;

const customFields = {
  usernameField: "artistName",
  passwordField: "password",
};

// VerifyCallback includes own implementation of password verification || Return Values of "done" call back function are important, here PASSPORT expect certain values
const verifyCallback = (username, password, done) => {
  User.findOne({ username: username })
    .then((user) => {
      console.log(`${username}, ${password}`);
      if (!user) {
        return done(null, false, { message: "No user found" });
      }

      // Putting password through verification function VALIDPASSWORD
      const isValid = validPassword(password, user.hash, user.salt);
      console.log(isValid);
      if (isValid) {
        console.log("Correct");
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => {
      done(err);
      console.log("Cannot reach database");
    });
};

// Create new Strategy
const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  console.log(user.id);
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .then((user) => {
      console.log(`userBOY`, user);
      done(null, user);
    })
    .catch((err) => done(err));
});

export { verifyCallback, strategy };
