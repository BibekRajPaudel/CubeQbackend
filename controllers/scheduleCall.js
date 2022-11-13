const StudentFeedback = require('../models/scheduleACall');
const catchAsync = require('../utils/asyncHandler');

// Description - Add feedback
// Route - POST /api/call

// Access - Public
const scheduleCall = catchAsync((req, res, next) => {
  const feedback = StudentFeedback.create({
    ...req.body,
  });

  if (feedback) {
    res.status(201).json({
      feedback,
      success: true,
    });
  } else {
    res.status(400).json({
      success: false,
    });
  }
});

// Description - Add feedback
// Route - POST /api/call
// Access - Private
const getScheduledCalls = catchAsync((req, res, next) => {
  const scheduledCalls = StudentFeedback.find({});

  if (scheduledCalls) {
    res.status(200).json({
      success: true,
      scheduledCalls,
    });
  } else {
    res.status(400).json({
      success: false,
      msg: "Couldn't get scheduled calls, Please try again later",
    });
  }
});

// Description - Delte a feedback
// Route - DELETE /api/call/:id
// Access - Private
const deleteACall = catchAsync((req, res, next) => {
  const scheduledCalls = StudentFeedback.find({});

  if (scheduledCalls) {
    res.status(200).json({
      success: true,
      scheduledCalls,
    });
  } else {
    res.status(400).json({
      success: false,
      msg: "Couldn't get scheduled calls, Please try again later",
    });
  }
});

module.exports = {
  scheduleCall,
  getScheduledCalls,
};
