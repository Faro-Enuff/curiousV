import MongoStore from "connect-mongo";
// Import Passport Middleware
import passport from "passport";
import { strategy } from "./config/PassportConfig.js";
////////////////////////
////////////////////////

// !!! Initialize the server and assign it to a port !!!

////////////////////////
////////////////////////

// Import Express into our application (express + app)
import express from "express";

// Server Creation via express
const app = express();

// Import .env
import dotenv from "dotenv";
dotenv.config();

// Import mongoose in our application
import mongoose from "mongoose";

export const connection = mongoose
  .connect(process.env.DB)
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));

////////////////////////
////////////////////////

// Middleware

////////////////////////
////////////////////////

import session from "express-session";
import cookieParser from "cookie-parser";

app.use(cookieParser(process.env.SECRET));

// BodyParser
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Cors Import + Initialization
import cors from "cors";
app.use(cors());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.DB,
      dbName: "interestCV",
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // Equals 1 day
    },
  })
);

// Define Strategy
passport.use(strategy);

app.use(passport.initialize());
app.use(passport.session());

// app.use((req, res, next) => {
//   console.log(req.session?.passport?.user);
//   console.log(req.session);
//   console.log(req.user);
//   next();
// });

////////////////////////
////////////////////////

// !!! Back-End Routes !!!

////////////////////////
////////////////////////

// Import Back-End Routes
import userRoutes from "./routes/userRoute.js";
import summonRoutes from "./routes/summonRoute.js";
import hobbyRoutes from "./routes/hobbyRoute.js";

// Back-End Route to users collection

app.use("/api/users", userRoutes);

// Back-End Route to summons collection

app.use("/api/summons", summonRoutes);

// Back-End Route to hobbies collection

app.use("/api/hobbies", hobbyRoutes);

////////////////////////
////////////////////////

// !!! Connecting Server and Database !!!

// Connecting to database (mongoDB Atlas "interestCV")

////////////////////////
////////////////////////

// Create a server to connect API Calls and Browser
const port = process.env.PORT || 5000;

// TODO eventually put this listen function into the connect function of mongoDB, makes more sense to wait until the connection is set (async function for mongoose connect. Netninja min 13 of mongoDB video)
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});
