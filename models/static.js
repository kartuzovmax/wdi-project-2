const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({

  // title: { type: String, required: true },
  // stickers: { type: Array, required: true },
  // background: { type: String, required: true }

}, {
  // timestamps: true
});

module.exports = mongoose.model('Static', projectSchema);
