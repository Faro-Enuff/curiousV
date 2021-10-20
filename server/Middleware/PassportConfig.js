// Import passport
import passport from "passport";
// Import Passport JWT
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
// Import Passport Google
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// Import .env
import dotenv from "dotenv";
dotenv.config();
// Import users model
import userModel from "../model/userModel.js";

// CREATING JWT STRATEGY
const jwtOptions = {
  secretOrKey: process.env.SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, next) => {
  try {
    const user = await userModel.findById(payload.id);
    console.log(`payload :>>`, payload);
    console.log(`user :>>`, user);
    if (!user) {
      return next(null, false);
    }
    next(null, { user, payload });
  } catch (error) {
    next(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

// Creating Google-OAuth Strategy

// // userModel.plugin(passportLocalMongoose);
// userModel.plugin(findOrCreate);

passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  userModel.findById(id, (err, user) => {
    done(err, user);
  });
});

const googleOptions = {
  clientID: process.env.ClientIDGoogle,
  clientSecret: process.env.ClientKeyGoogle,
  callbackURL: "http://localhost:5000/api/users/google/callback",
  passReqToCallback: false,
};

const googleVerify = async (accessToken, refreshToken, profile, done) => {
  console.log("Profile : >> ", profile);

  userModel.findOne({ email: profile.emails[0].value }, (err, currentUser) => {
    console.log("User : >> ", currentUser);
    if (err) {
      console.log(err);
    }
    if (currentUser) {
      return done(err, currentUser);
    } else {
      new userModel({
        googleId: profile.id,
        email: profile.emails[0].value,
        artistName: profile.displayName,
        firstName: profile.name.givenName,
        oAuth: true,
        profileImage: profile.photos[0].value,
      })
        .save()
        .then((newUser) => {
          console.log("created new user : >>", newUser);
          done(null, newUser);
        });
    }
  });
};

const googleStrategy = new GoogleStrategy(googleOptions, googleVerify);

export { jwtStrategy, googleStrategy };
