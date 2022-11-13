const express = require('express');
require('dotenv').config();
const cors = require('cors');

// Routers
const scheduleACallRouter = require('./routers/scheduleACallRouter');

// Error handler middleware import
const errorHandler = require('./middleware/errorHandler');
const routeNotFound = require('./middleware/notFound');

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Server started !!!!!!!!!!');
});

app.use('/api/call', scheduleACallRouter);

app.use(errorHandler);
app.use(routeNotFound);
