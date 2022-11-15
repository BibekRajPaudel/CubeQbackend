require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db/connect');

// Routers
const scheduleACallRouter = require('./routers/scheduleACallRouter');
const jobApplyRouter = require('./routers/jobApplyRouter');

// Admin ROuters
const aboutUsRouter = require('./routers/AdminRouters/aboutUsRouter');
const ourTeamRouter = require('./routers/AdminRouters/ourTeamRouter');
const ourServiceRouter = require('./routers/AdminRouters/ourServiceRouter');
const clientCallsRouter = require('./routers/AdminRouters/clientCallsRouter');

// Error handler middleware import
const errorHandler = require('./middleware/errorHandler');
const routeNotFound = require('./middleware/notFound');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Server started !!!!!!!!!!');
});

app.use('/api/call', scheduleACallRouter);
app.use('/api/jobapply', jobApplyRouter);

// Admin Routes
app.use('/api/admin/aboutus', aboutUsRouter);
app.use('/api/admin/ourteam', ourTeamRouter);
app.use('/api/admin/ourservice', ourTeamRouter);
app.use('/api/admin/clientcall', clientCallsRouter);

app.use(
  '/public/uploads/jobapplications',
  express.static(path.join(__dirname, '/public/uploads/jobapplications'))
);
app.use(
  '/public/uploads/aboutusimage',
  express.static(path.join(__dirname, '/public/uploads/jobapplications'))
);
app.use(
  '/public/uploads/ourteamimages',
  express.static(path.join(__dirname, '/public/uploads/jobapplications'))
);

app.use(errorHandler);
app.use(routeNotFound);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on Port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
})();
