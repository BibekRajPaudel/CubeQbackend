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
    trim: true,
  },
  image: {
    type: String,
  },
  // Fields for social links
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
});

module.exports = mongoose.model('OurTeam', OurTeamSchema);
