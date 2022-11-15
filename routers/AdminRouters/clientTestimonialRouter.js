const router = require('express').Router();
const ClientTestimonial = require('../../models/admin/clientTestimonial');
const catchAsync = require('../../utils/asyncHandler');

router.get(
  '/',
  catchAsync(async (req, res) => {
    const jobPosts = await ClientTestimonial.find();

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
    const clientTestimonial = await ClientTestimonial.findById(req.params.id);

    if (clientTestimonial) {
      res.status(200).json({
        clientTestimonial,
        success: true,
      });
    } else {
      res.status(400).json({
        success: false,
        msg: 'Failed to get client testimonial info',
      });
    }
  })
);

router.patch(
  '/:id',
  catchAsync(async (req, res) => {
    const clientTestimonial = await ClientTestimonial.findById(req.params.id);

    if (clientTestimonial) {
      const t = await ClientTestimonial.findByIdAndUpdate(req.params.id, {
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
    const result = await ClientTestimonial.create({
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
        msg: 'Failed to add client testimonial, Please try again later',
      });
    }
  })
);

router.delete(
  '/:id',
  catchAsync(async (req, res) => {
    const result = await ClientTestimonial.findByIdAndDelete(req.params.id);

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
