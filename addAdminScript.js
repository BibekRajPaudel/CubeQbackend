const adminUser = require('./models/adminUser');
const AdminUser = require('./models/adminUser');
const connectDB = require('./db/connect');

const addAdmin = async (name, email, password) => {
  await connectDB(
    'mongodb+srv://cubeq:cubeq@work.ri5nhtx.mongodb.net/cubeq?retryWrites=true&w=majority'
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

addAdmin('Anjan Basnet', 'anjanbasnet@gmail.com', 'CUbeq123');
