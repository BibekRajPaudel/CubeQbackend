const express = require('express');
const router = express.Router();
const OurService = require('../../models/admin/ourService');
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
  deleteTeamMember,
} = require('../../controllers/AdminControllers/ourTeamController');

const storage = multer.diskStorage({
  // location where the file gets saved
  destination(req, file, cb) {
    cb(null, 'public/uploads/ourserviceimages');
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

router.post(
  '/',
  upload.single('image'),
  catchAsync(async (req, res) => {
    const file = req.file;

    if (!file) return res.status(400).send('No image in the request');

    const result = await OurService.create({
      ...req.body,
      image: file.path,
    });

    if (result) {
      res.status(200).json({
        success: true,
        msg: 'Service successfully added',
      });
    } else {
      res.status(200).json({
        success: false,
        msg: 'Failed to add service, Please try again later',
      });
    }
  })
);

router.patch(
  '/:id',
  upload.single('image'),
  catchAsync(async (req, res) => {
    const team = await OurService.findById(req.params.id);
    const file = req.file;

    if (team) {
      const t = await OurService.findByIdAndUpdate(req.params.id, {
        ...req.body,
        image: file && file.path ? file.path : team.image,
      });

      if (t) {
        res.status(200).json({
          success: true,
          msg: 'Updated',
        });
      } else {
        res.status(400).json({
          success: false,
          msg: 'Something went wrong',
        });
      }
    } else {
      res.status(400).json({
        success: false,
        msg: 'Something went wrong',
      });
    }
  })
);

router.get(
  '/',
  catchAsync(async (req, res) => {
    const teams = await OurService.find();

    if (teams) {
      res.status(200).json({
        teams,
        success: true,
      });
    } else {
      res.status(400).json({
        success: false,
      });
    }
  })
);

router
  .route('/:id')
  .get(
    catchAsync(async (req, res) => {
      const teamMember = await OurService.findById(req.params.id);

      if (teamMember) {
        res.status(200).json({
          teamMember,
          success: true,
        });
      } else {
        res.status(400).json({
          success: false,
          msg: 'Failed to get service info',
        });
      }
    })
  )
  .delete(
    catchAsync(async (req, res) => {
      const result = await OurService.findByIdAndDelete(req.params.id);

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
