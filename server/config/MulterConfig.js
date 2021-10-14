// Import Express
import express from "express";
// Import Multer
import multer from "multer";

// Define Multer Storage
const storage = multer.diskStorage({
  // Destination
  destination: (req, file, cb) => {
    cb(null, "./Uploads");
  },
  // TODO Filename (cb, maybe use file.originalname for naming)
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

// Upload Parameters for multer
export const upload = multer({
  storage: storage,
  limits: { fieldSize: 1024 * 1024 * 3 },
});
