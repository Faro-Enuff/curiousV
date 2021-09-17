////////////////////////
////////////////////////

// !!! Initialize the server and assign it to a port !!!

////////////////////////
////////////////////////

// Import Express into our application (express + app)
import express from "express";

// Server Creation via express
const app = express();

// Create a server to connect API Calls and Browser
const port = process.env.PORT || 5000;

// TODO eventually put this listen function into the connect function of mongoDB, makes more sense to wait until the connection is set (async function for mongoose connect. Netninja min 13 of mongoDB video)
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

////////////////////////
////////////////////////

// Middleware

////////////////////////
////////////////////////

// BodyParser
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Cors
//Import
import cors from "cors";
app.use(cors());

////////////////////////
////////////////////////

// !!! Back-End Routes !!!

////////////////////////
////////////////////////

// Import Back-End Routes
import userRoutes from "./routes/userRoute.js";
import summonRoutes from "./routes/summonRoute.js";

// Back-End Route to users collection

app.use("/api/users", userRoutes);

// Back-End Route to summons collection

app.use("/api/summons", summonRoutes);

////////////////////////
////////////////////////

// !!! Connecting Server and Database !!!

// Connecting to database (mongoDB Atlas "interestCV")

////////////////////////
////////////////////////

// Import .env
import dotenv from "dotenv";
dotenv.config();

// Import mongoose in our application
import mongoose from "mongoose";

mongoose
  .connect(process.env.DB)
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));
