import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
// Import .env
import dotenv from "dotenv";
dotenv.config();
// Import users model
import userModel from "../model/userModel.js";

const jwtOptions = {
  secretOrKey: process.env.SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, next) => {
  try {
    const user = await userModel.findById(payload.id);
    console.log(`user :>>`, user);
    if (!user) {
      return next(null, false);
    }
    next(null, user);
  } catch (error) {
    next(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

export { jwtStrategy };
