const mongoose = require('mongoose');

const AboutUsSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  subText: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('AboutUs', AboutUsSchema);
