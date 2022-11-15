const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

// Checking if the sent password matches with password in database
AdminUserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

AdminUserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  // Encrypting before saving it in database
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('Admin', AdminUserSchema);
