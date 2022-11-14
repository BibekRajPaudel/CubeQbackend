const express = require('express');
const multer = require('multer');
const path = require('path');
const jobApply = require('../controllers/jobApplyController');
const { fileFilterPdfAndDocCheck } = require('../utils/multerStorage');

const router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/jobapplications');
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname.split('.')[0];

    cb(null, originalName + path.extname(file.originalname));
  },
});

var upload = multer({
  storage: storage,
  fileFilter: fileFilterPdfAndDocCheck,
});

var uploadMultiple = upload.fields([
  {
    name: 'cv',
    maxCount: 1,
  },
  { name: 'coverLetter', maxCount: 1 },
]);

router.post('/', uploadMultiple, jobApply);

module.exports = router;
