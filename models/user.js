import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// if the userSchema db exists, export it. if not, create it and export it
module.exports = mongoose.models.User || mongoose.model('User', userSchema);