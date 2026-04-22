const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

dotenv.config();

const seedUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/shopverse');
    console.log('MongoDB Connected for seeding...');

    // Clear existing users (optional, but good for clean seed)
    await User.deleteMany({ email: 'kajal432yadav@gmail.com' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    await User.create({
      name: 'Kajal Yadav',
      email: 'kajal432yadav@gmail.com',
      password: hashedPassword,
      isAdmin: true
    });

    console.log('Default user created: kajal432yadav@gmail.com / password123');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedUser();
