// Express Variable
const express = require("express");

// Create Instance of the express router
const router = express.Router();

// Import summons model
const summonsModel = require("../model/summonModel");

router.get("/name", (req, res) => {
  summonsModel.find({}, function (err, users) {
    if (err) {
      res.send(err);
    } else {
      res.send(users);
    }
  });
});

// Export Summons Route
module.exports = router;
