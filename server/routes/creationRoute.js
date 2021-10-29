// Import Express
import express from "express";
// Import Passport
import passport from "passport";
// Import Controller functions
import * as creationController from "../controller/creations.js";

const router = express.Router();

router.get("/", creationController.getCreation);

router.post("/addCreation", creationController.createCreation);

export default router;
