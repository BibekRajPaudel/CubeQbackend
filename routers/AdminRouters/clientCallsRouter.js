const router = require('express').Router();
const catchAsync = require('../../utils/asyncHandler');
const ClientCall = require('../../models/scheduleACall');

router.get(
  '/',
  catchAsync(async (req, res) => {
    const clientCalls = await ClientCall.find();

    if (clientCalls) {
      res.status(200).json({
        success: true,
        clientCalls,
      });
    } else {
      res.status(400).json({
        success: false,
        msg: "Couldn't get client calls, Please try again later.",
      });
    }
  })
);

router.get(
  '/:id',
  catchAsync(async (req, res) => {
    const singleCallDetails = await ClientCall.findById(req.params.id);

    if (singleCallDetails) {
      res.status(200).json({
        singleCallDetails,
        success: true,
      });
    } else {
      res.status(400).json({
        success: false,
        msg: 'Please try again later',
      });
    }
  })
);

router.delete(
  '/:id',
  catchAsync(async (req, res) => {
    const result = await ClientCall.findByIdAndDelete(req.params.id);

    if (result) {
      res.status(200).json({
        success: true,
        msg: 'Deleted Successfully',
      });
    } else {
      res.status(400).json({
        success: false,
        msg: 'Please try again later',
      });
    }
  })
);

module.exports = router;
