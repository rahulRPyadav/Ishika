const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ishika_travels');

const resetAndCreateAdmin = async () => {
  try {
    // 1. Purane Admin ko pehle delete karte hain (Reset)
    await User.deleteMany({ email: 'admin@ishikatravels.com' });
    console.log('🗑️ Purana Admin account reset kar diya gaya.');

    // 2. Fresh Password Hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);

    // 3. Naya Admin Create karo
    await User.create({
      name: 'Ishika Admin',
      email: 'admin@ishikatravels.com',
      password: hashedPassword,
      role: 'admin'
    });

    console.log('✅ FRESH ADMIN ACCOUNT CREATED SUCCESSFULLY!');
    console.log('-------------------------------------------');
    console.log('📧 Email: admin@ishikatravels.com');
    console.log('🔑 Password: admin123');
    console.log('-------------------------------------------');
    process.exit();
  } catch (error) {
    console.error('❌ Error creating admin:', error);
    process.exit(1);
  }
};

resetAndCreateAdmin();