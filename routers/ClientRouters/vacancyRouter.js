const catchAsync = require('../../utils/asyncHandler');
const JobPost = require('../../models/admin/jobPost');

const router = require('express').Router();

router.get(
  '/',
  catchAsync(async (req, res) => {
    const jobPosts = await JobPost.find();

    if (jobPosts) {
      res.status(200).json({
        jobPosts,
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
