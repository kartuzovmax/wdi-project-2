const mongoose = require('mongoose');

const stickerSchema = new mongoose.Schema({
  imgLink: { type: String, required: true },
  x: { type: String },
  y: { type: String},
  width: { type: String},
  height: { type: String},
  index: { type: String}
});

module.exports = mongoose.model('Sticker', stickerSchema);
