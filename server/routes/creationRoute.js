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
  uploadCreationFiles.single('file'),
  creationController.createCreation
);

// Get all Creations of logged in users

router.get(
  '/getCreations',
  passport.authenticate('jwt', { session: false }),
  creationController.getCreations
);

export default router;
