const router = require('express').Router();
const catchAsync = require('../../utils/asyncHandler');
const ClientCall = require('../../models/scheduleACall');
const {
  getClientCalls,
  getClientCall,
  deleteACall,
} = require('../../controllers/AdminControllers/clientCallController');

router.get('/', getClientCalls);

router.route('/:id').get(getClientCall).delete(deleteACall);

module.exports = router;
