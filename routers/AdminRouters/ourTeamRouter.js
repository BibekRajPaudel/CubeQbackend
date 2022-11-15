const express = require('express');
const router = express.Router();
const OurTeam = require('../../models/admin/ourTeam');
const multer = require('multer');
const catchAsync = require('../../utils/asyncHandler');
const path = require('path');
const {
  updateAboutUs,
  getAboutUs,
} = require('../../controllers/AdminControllers/aboutUsController');
const {
  addTeamMember,
  updateTeamMember,
  getAllTeamMembers,
  getSingleTeamMember,
} = require('../../controllers/AdminControllers/ourTeamController');

const storage = multer.diskStorage({
  // location where the file gets saved
  destination(req, file, cb) {
    cb(null, 'public/uploads/ourteamimages');
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

router.post('/', upload.single('image'), addTeamMember);

router.patch('/:id', upload.single('image'), updateTeamMember);

router.get('/', getAllTeamMembers);

router.get('/:id', getSingleTeamMember);

router.delete(
  '/:id',
  catchAsync(async (req, res) => {
    const result = await OurTeam.findByIdAndDelete(req.params.id);

    if (result) {
      res.status(200).json({
        result,
        success: true,
      });
    } else {
      res.status(400).json({
        success: false,
      });
    }
  })
);

module.exports = router;
