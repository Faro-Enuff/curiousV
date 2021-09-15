const usersModel = require("../model/usersModel");
// Express variable
const express = require("express");

// Create Instance of the express router
const router = express.Router();

// Test Rout - Two arguments 1. the path 2. callback function with request object (req) and response object(res)
// 1. Argument here Example: localhost:5000/users/test
// 2. Argument of call back function (res = simple String in JSON format "Test route")
router.get("/test", (req, res) => {
  res.send({ msg: "Test route." });
});

router.get("/all", (req, res) => {
  usersModel.find({}, function (err, users) {
    if (err) {
      res.send(err);
    } else {
      res.send(users);
    }
  });
});
module.exports = router;
