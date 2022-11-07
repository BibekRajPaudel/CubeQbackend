const express = require('express');
require('dotenv').config();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Server started !!!!!!!!!!');
});
