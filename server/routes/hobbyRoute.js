// Import Express
import express from "express";
// Import hobbyModel
import hobbyModel from "../model/hobbyModel.js";

// Create Instance of the Express Router
const router = express.Router();

router.get("/", (req, res) => {
  hobbyModel
    .find()
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

export default router;
