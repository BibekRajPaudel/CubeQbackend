const asyncHandler = require('../utils/asyncHandler');
const JobApplication = require('../models/jobapplicationModels/jobApplication');

const jobApply = asyncHandler(async (req, res) => {
  const { cv, coverLetter } = req.files;
  console.log('Body : ', req.body);
  console.log(cv[0].path, coverLetter[0].path);

  const jobApplication = JobApplication.create({
    ...req.body,
    cv: cv[0].path,
    coverLetter: coverLetter[0].path,
  });

  if (jobApplication) {
    res.status(200).json({
      success: true,
      msg: 'Job Application Submitted Successfully!',
    });
  } else {
    res.status(200).json({
      success: false,
      msg: 'Please try again later',
    });
  }
});

module.exports = jobApply;
