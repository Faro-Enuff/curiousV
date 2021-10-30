// Import Express into our application (express + app)
import express from "express";

// Import Passport Middleware
import passport from "passport";
import { jwtStrategy, googleStrategy } from "./Middleware/PassportConfig.js";

// Import .env
import dotenv from "dotenv";
dotenv.config();

// Import mongoose in our application
import mongoose from "mongoose";

// Middleware Imports
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";

// Import Back-End Routes
import userRoutes from "./routes/userRoute.js";
import summonRoutes from "./routes/summonRoute.js";
import chatRoutes from "./routes/chatRoute.js";

// Import Socket.IO
import { Server } from "socket.io";
import http from "http";

////////////////////////
////////////////////////

// !!! Initialize the server and assign it to a port !!!

////////////////////////
////////////////////////

// Server Creation via express
const app = express();

export const connection = mongoose
  .connect(process.env.DB)
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));

////////////////////////
////////////////////////

// !!! Middleware !!!

////////////////////////
////////////////////////

app.use(cookieParser(process.env.SECRET));

// BodyParser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Cors Initialization
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

// Session Initialization
app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport Strategies
passport.use("jwt", jwtStrategy);
passport.use("google", googleStrategy);
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

////////////////////////
////////////////////////

// !!! Back-End Routes !!!

////////////////////////
////////////////////////

// Back-End Route to users collection

app.use("/api/users", userRoutes);

// Back-End Route to summons collection

app.use("/api/summons", summonRoutes);

// Back-End Route to chatrooms collection

app.use("/api/chatrooms", chatRoutes);

////////////////////////////////////////////////////////////////
// !!! Provide Static files - Divide into different Local Storages !!!
////////////////////////////////////////////////////////////////

// Local Storage for Profile Images
app.use("/profileImage", express.static("UploadProfileImages"));
// Local Storage for Summon Files
app.use("/summonFile", express.static("UploadSummonFiles"));

////////////////////////
////////////////////////

// !!! Connecting Server and Database !!!
// => => =>  Connecting to database (mongoDB Atlas "interestCV")

////////////////////////
////////////////////////

// Create a server to connect API Calls and Browser
const port = process.env.PORT || 5000;

// TODO eventually put this listen function into the connect function of mongoDB, makes more sense to wait until the connection is set (async function for mongoose connect. Netninja min 13 of mongoDB video)

const server = app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

////////////////////////
////////////////////////

// !!! Socket Initialization !!!

////////////////////////
////////////////////////

const httpServer = http.createServer(app);

// Server instance
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log("User with ID:", socket.id, "joined room:", data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
    console.log(data);
  });

  // Determine a disconnected User
  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});

httpServer.listen(3001, () => {
  console.log("Server is running on 3001port");
});
