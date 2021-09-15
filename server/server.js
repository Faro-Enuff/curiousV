////////////////////////
////////////////////////

// !!! Initalise the server and assign it to a port !!!

////////////////////////
////////////////////////

// Import Express into our application (express + app)
const express = require("express");
const app = express();

// Create a server to connect API Calls and Browser
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

const bodyParser = require("body-parser");
const cors = require("cors");

// Middleware
// BodyParser
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// Cors
app.use(cors());

////////////////////////
////////////////////////

// !!! Back-End Routes !!!

////////////////////////
////////////////////////

// Back-End Route to users collection

app.use("/users", require("./routes/users"));

// Back-End Route to summons collection

app.use("/summons", require("./routes/summons"));

////////////////////////
////////////////////////

// !!! Connecting Server and Database !!!

////////////////////////
////////////////////////

// Import keys file and select the mongoURI
const db = require("./keys").mongoURI;
// Import mongoose in our application
const mongoose = require("mongoose");

// Connecting to database (mongoDB Atlas "interestCV")
// LMS is outdate
mongoose
  .connect(db)
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));
