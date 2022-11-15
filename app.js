require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db/connect');

// Routers
const scheduleACallRouter = require('./routers/scheduleACallRouter');
const jobApplyRouter = require('./routers/jobApplyRouter');

// Admin ROuters
const adminLoginRouter = require('./routers/AdminRouters/adminLoginRouter');
const aboutUsRouter = require('./routers/AdminRouters/aboutUsRouter');
const ourTeamRouter = require('./routers/AdminRouters/ourTeamRouter');
const ourServiceRouter = require('./routers/AdminRouters/ourServiceRouter');
const caseStudyRouter = require('./routers/AdminRouters/caseStudyRouter');
const jobPostRouter = require('./routers/AdminRouters/jobPostRouter');
const clientTestimonialRouter = require('./routers/AdminRouters/clientTestimonialRouter');
const clientCallsRouter = require('./routers/AdminRouters/clientCallsRouter');

// Error handler middleware import
const errorHandler = require('./middleware/errorHandler');
const routeNotFound = require('./middleware/notFound');
const { protect, admin } = require('./middleware/authMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Server started !!!!!!!!!!');
});

app.use('/api/call', scheduleACallRouter);
app.use('/api/jobapply', jobApplyRouter);

// Admin Routes
app.use('/api/admin/login', adminLoginRouter);
app.use('/api/admin/aboutus', protect, admin, aboutUsRouter);
app.use('/api/admin/ourteam', protect, admin, ourTeamRouter);
app.use('/api/admin/ourservice', protect, admin, ourServiceRouter);
app.use('/api/admin/casestudy', protect, admin, caseStudyRouter);
app.use('/api/admin/jobpost', protect, admin, jobPostRouter);
app.use(
  '/api/admin/clienttestimonial',
  protect,
  admin,
  clientTestimonialRouter
);
app.use('/api/admin/clientcall', protect, admin, clientCallsRouter);

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
app.use(
  '/public/uploads/ourserviceimages',
  express.static(path.join(__dirname, '/public/uploads/jobapplications'))
);
app.use(
  '/public/uploads/casestudy',
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
