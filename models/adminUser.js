const mongoose = require('mongoose');

const AdminUserSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    required: [true, 'Email address is required'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
});

module.exports = mongoose.Model('Admin', AdminUserSchema);
