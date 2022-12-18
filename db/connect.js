const mongoose = require('mongoose');

const connectDB = uri => {
  return mongoose.connect("mongodb://127.0.0.1:27017/cubeQ", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
