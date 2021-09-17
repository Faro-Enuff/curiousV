// Import Express
import express from "express";
//Import users model
import userModel from "../model/userModel.js";

// Create Instance of the express router
const router = express.Router();

// 1. Argument here Example: localhost:5000/users/test
// 2. Argument of call back function (res = simple String in JSON format "Test route")

router.get("/all", (req, res) => {
  userModel
    .find()
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

// Export Users Route
export default router;
