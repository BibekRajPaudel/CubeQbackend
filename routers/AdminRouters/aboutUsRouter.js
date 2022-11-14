const express = require('express');
const router = express.Router();
const AboutUs = require('../../models/admin/aboutUs');
const multer = require('multer');
const catchAsync = require('../../utils/asyncHandler');
const path = require('path');
const { rmSync } = require('fs');
const {
  updateAboutUs,
  getAboutUs,
} = require('../../controllers/AdminControllers/aboutUsController');

const storage = multer.diskStorage({
  // location where the file gets saved
  destination(req, file, cb) {
    cb(null, 'public/uploads/aboutusimage');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const checkFileType = (file, cb) => {
  const filetypes = /jpg|jpeg|png|pdf/;
  // checking if the file extension is either jpg, jpeg or png.
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Checking mime type as every file has it -> image/gif
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images Only Allowed');
  }
};

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post('/', upload.single('image'), updateAboutUs);

router.get('/', getAboutUs);

module.exports = router;
