const router = require('express').Router();
const JobPost = require('../../models/admin/jobPost');
const catchAsync = require('../../utils/asyncHandler');

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

router.get(
  '/:id',
  catchAsync(async (req, res) => {
    const jobPost = await JobPost.findById(req.params.id);

    if (jobPost) {
      res.status(200).json({
        jobPost,
        success: true,
      });
    } else {
      res.status(400).json({
        success: false,
        msg: 'Failed to get job post info',
      });
    }
  })
);

router.patch(
  '/:id',
  catchAsync(async (req, res) => {
    const job = await JobPost.findById(req.params.id);

    if (job) {
      const t = await JobPost.findByIdAndUpdate(req.params.id, {
        ...req.body,
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
        msg: 'No job found',
      });
    }
  })
);

router.post(
  '/',
  catchAsync(async (req, res) => {
    const result = await JobPost.create({
      ...req.body,
    });

    if (result) {
      res.status(200).json({
        success: true,
        msg: 'Job successfully added',
      });
    } else {
      res.status(200).json({
        success: false,
        msg: 'Failed to add job, Please try again later',
      });
    }
  })
);

router.delete(
  '/:id',
  catchAsync(async (req, res) => {
    const result = await JobPost.findByIdAndDelete(req.params.id);

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
