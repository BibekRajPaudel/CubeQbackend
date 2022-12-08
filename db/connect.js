const mongoose = require('mongoose');

const connectDB = uri => {
  return mongoose.connect("mongodb+srv://root_cubeq:TpZEtmMAnwlj1KDV@cluster0.8rmu1ij.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
