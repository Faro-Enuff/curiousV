// Import Multer
import multer from "multer";

// Define Multer Storage
const storageProfileImages = multer.diskStorage({
  // Destination
  destination: (req, file, cb) => {
    cb(null, "./UploadProfileImages");
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const storageSummonFiles = multer.diskStorage({
  // Destination
  destination: (req, file, cb) => {
    cb(null, "./UploadSummonFiles");
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

// Upload Parameters for multer
export const uploadProfileImages = multer({
  storage: storageProfileImages,
  limits: { fieldSize: 1024 * 1024 * 3 },
});

// Upload Parameters for multer
export const uploadSummonFiles = multer({
  storage: storageSummonFiles,
  limits: { fieldSize: 1024 * 1024 * 3 },
});
