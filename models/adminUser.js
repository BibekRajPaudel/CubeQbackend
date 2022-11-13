const mongoose = require('mongoose');

const AdminUserSchema = mongoose.Schema({
  name: String,
  isAdmin: {
    type: Boolean,
  },
});

module.exports = mongoose.Model('Admin', AdminUserSchema);
