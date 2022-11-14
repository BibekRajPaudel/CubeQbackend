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
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('OurService', OurServiceSchema);
