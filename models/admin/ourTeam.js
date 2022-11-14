const mongoose = require('mongoose');

const OurTeamSchema = mongoose.Schema({
  memberName: {
    type: String,
    trim: true,
  },
  jobTitle: {
    type: String,
    trim: true,
  },
  position: {
    type: String,
    trim,
  },
  image: {
    type: String,
    required: true,
  },
  // Fields for social links
  github: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('OurTeam', OurTeamSchema);
