const mongoose = require('mongoose');

const stickerSchema = new mongoose.Schema({
  imgObject: [{}]
});

module.exports = mongoose.model('Sticker', stickerSchema);
