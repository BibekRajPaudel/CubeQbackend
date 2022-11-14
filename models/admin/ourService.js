const mongoose = require('mongoose');

const OurServiceSchema = mongoose.Schema({
  serviceTitle: {
    type: String,
    trim: true,
  },
  serviceSubTitle: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model('OurService', OurServiceSchema);
