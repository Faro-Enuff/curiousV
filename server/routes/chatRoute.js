// Import Express
import express from "express";
// Import Passport
import passport from "passport";
// Import Controller functions
import { addChat, getChatroom, saveMessages } from "../controller/chats.js";
// Create Instance of the Express Router
const router = express.Router();

// Add a Chatroom

router.post(
  "/addChat",
  passport.authenticate("jwt", { session: false }),
  addChat
);

// Get a specific Chatroom

router.get(
  "/:receiverName",
  passport.authenticate("jwt", { session: false }),
  getChatroom
);

router.post(
  "/saveMessages",
  passport.authenticate("jwt", { session: false }),
  saveMessages
);

export default router;
