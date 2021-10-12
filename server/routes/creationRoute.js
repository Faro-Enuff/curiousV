// Import Express
import express from "express";
// Import Passport
import passport from "passport";
// Import Controller functions
import { createCreation, getCreation } from "../controller/creations.js";

const router = express.Router();

router.get("/", getCreation);

router.post("/addCreation", createCreation);

export default router;
