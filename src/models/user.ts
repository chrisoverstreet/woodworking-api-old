import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  googleUid: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
