// Import Express
import express from "express";
// Import summon model
import summonModel from "../model/summonModel.js";

// Create Instance of the express router
const router = express.Router();

router.get("/", (req, res) => {
  summonModel
    .find()
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

// Export summon route
export default router;
