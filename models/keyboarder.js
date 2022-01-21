const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const keyboarderSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarURL: String,
  googleId: String,
  keyboards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Keyboard",
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Keyboarder', keyboarderSchema);