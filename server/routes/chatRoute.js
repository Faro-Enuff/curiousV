// Import Express
import express from 'express';
// Import Passport
import passport from 'passport';
// Import Controller functions
import * as chatController from '../controller/chats.js';
// Create Instance of the Express Router
const router = express.Router();

// Add a Chatroom

router.post(
  '/addChat',
  passport.authenticate('jwt', { session: false }),
  chatController.addChat
);

// Get a specific Chatroom

router.get(
  '/:_id',
  passport.authenticate('jwt', { session: false }),
  chatController.getChatroom
);

router.post(
  '/saveMessages',
  passport.authenticate('jwt', { session: false }),
  chatController.saveMessages
);

export default router;
