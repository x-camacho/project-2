const mongoose = require('mongoose');

const keyboarderSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarURL: String,
  googleId: String,
  keyboard: {
    
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Keyboarder', keyboarderSchema);