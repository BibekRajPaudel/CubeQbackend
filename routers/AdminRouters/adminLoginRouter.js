const catchAsync = require('../../utils/asyncHandler');
const generateToken = require('../../utils/generateToken');

const router = require('express').Router();

const User = require('../../models/adminUser');

router.post(
  '/',
  catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log(user);
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      throw createCustomError('Invalid Email and Password Combination', 401);
    }
  })
);

module.exports = router;
