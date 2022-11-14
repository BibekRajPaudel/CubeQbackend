const {
  scheduleCall,
  getScheduledCalls,
} = require('../controllers/scheduleCall');
const StudentFeedback = require('../models/scheduleACall');

const router = require('express').Router();

// Done by client
router.post('/', scheduleCall);

module.exports = router;
