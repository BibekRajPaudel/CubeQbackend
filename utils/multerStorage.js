const multer = require('multer');
const path = require('path');
const express = require('express');
const app = express();

const provideStorage = filePath => {
  return multer.diskStorage({
    // location where the file gets saved
    destination(req, file, cb) {
      cb(null, filePath);
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    },
  });
};

const fileFilterPdfAndDocCheck = (req, file, callback) => {
  var ext = path.extname(file.originalname);
  if (ext !== '.pdf' && ext !== '.docx') {
    return callback(new Error('Only pdf or docx are allowed'));
  }
  callback(null, true);
};

// /jpg|jpeg|png|pdf/ should be passe in whatToChecl
const checkFileType = (whatToCheck, errMsg) => {
  const filetypes = whatToCheck;
  // checking if the file extension is either jpg, jpeg or png.
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Checking mime type as every file has it -> image/gif
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(errMsg);
  }
};

const filestorage = multer.diskStorage({
  destination:(req, file, cb)=>{
cb(null, "images")
  },
  filename: (req, file, cb) =>{
    cb(null, new Date().toISOString() + "-" + file.originalname)
  }
})


app.use(multer({storage: filestorage}).single("image"))

module.exports = { provideStorage, fileFilterPdfAndDocCheck, checkFileType };
