const {
  scheduleCall,
  getScheduledCalls,
} = require('../controllers/scheduleCall');
const StudentFeedback = require('../models/scheduleACall');
const catchAsync = require('../utils/asyncHandler');

const router = require('express').Router();

router.post('/', scheduleCall);

// Admin routes
router.get('/', getScheduledCalls);
