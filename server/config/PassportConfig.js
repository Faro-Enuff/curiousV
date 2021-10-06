// Import passport
import passport from "passport";
// Import Passport JWT
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
// Import .env
import dotenv from "dotenv";
dotenv.config();
// Import users model
import userModel from "../model/userModel.js";
import authsModel from "../model/authModel.js";

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

import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const googleOptions = {
  clientID: process.env.ClientIDGoogle,
  clientSecret: process.env.ClientKeyGoogle,
  callbackURL: "http://localhost:5000/google/callback",
};

const googleVerify = async (accessToken, refreshToken, profile, done) => {
  const user = await authsModel.findOrCreate(
    { googleId: profile.id },
    (err, user) => {
      return done(err, user);
    }
  );
};

const googleStrategy = new GoogleStrategy(googleOptions, googleVerify);

export { jwtStrategy, googleStrategy };
