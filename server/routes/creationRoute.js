// Import Express
import express from 'express';
// Import Passport
import passport from 'passport';
// Import Multer Upload Config
import { uploadCreationFiles } from '../Middleware/MulterConfig.js';
// Import Controller functions
import * as creationController from '../controller/creations.js';
// Create Instance of the Express Router
const router = express.Router();

// Create a Creation

router.post(
  '/createCreation',
  passport.authenticate('jwt', { session: false }),
  uploadCreationFiles.single('creationFile'),
  creationController.createCreation
);

// Get all Creations of logged in users

router.get(
  '/getCreations',
  passport.authenticate('jwt', { session: false }),
  creationController.getCreations
);

// Get all Creations of another (specific) user

router.get(
  '/getOtherUsersCreations/:userId',
  passport.authenticate('jwt', { session: false }),
  creationController.getOtherUsersCreations
);

// Get specific Creation - req.body Summon Id & loggedIn User

router.get(
  '/getSummonCreationUser/:summonId',
  passport.authenticate('jwt', { session: false }),
  creationController.getSummonCreationUser
);

export default router;
