const adminUser = require('./models/adminUser');
const AdminUser = require('./models/adminUser');
const connectDB = require('./db/connect');

const addAdmin = async (name, email, password) => {
  await connectDB(
    'mongodb://127.0.0.1:27017/cubeQ'
  );
  try {
    const admin = await adminUser.create({
      name,
      email,
      password,
      isAdmin: true,
    });

    if (admin) {
      console.log('Admin user created: ', admin);
    } else {
      console.log('Admin user not created');
    }

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

addAdmin('Abhishek Chapagai', 'pawan@gmail.com', '123456789');
