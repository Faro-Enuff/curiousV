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

const googleOptions = {
  clientID: process.env.ClientIDGoogle,
  clientSecret: process.env.ClientKeyGoogle,
  callbackURL: "http://localhost:5000/google/callback",
  passReqToCallback: true,
};

const googleVerify = (accessToken, refreshToken, profile, cb) => {
  console.log(profile);
  console.log("AcessToken:", accessToken);
  console.log(`RefreshToken`, refreshToken);
  userModel.findOrCreate({ email: profile.email }, (err, user) => {
    return cb(err, user);
  });
};

const googleStrategy = new GoogleStrategy(googleOptions, googleVerify);

passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  userModel.findById(id, (err, user) => {
    done(err, user);
  });
});

// passport.serializeUser((user, done) => {
//   console.log("Serialzing user", user);
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   const user = userModel.findOne({ id }).catch((err) => {
//     console.log("Error deserializing", err);
//     done(err, null);
//   });
//   console.log("Deserialized user", user);
//   if (user) {
//     done(null, user);
//   }
// });

export { jwtStrategy, googleStrategy };
