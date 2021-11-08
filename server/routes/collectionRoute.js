// Import Express
import express from 'express';
// Import Passport
import passport from 'passport';
// Import Controller functions
import * as collectionController from '../controller/collections.js';
// Create Instance of the Express Router
const router = express.Router();

// Get all Creations of logged in users

router.get(
  '/getUserCollection',
  passport.authenticate('jwt', { session: false }),
  collectionController.getCollection
);

export default router;
