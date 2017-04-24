const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  images: [{ type: mongoose.Schema.ObjectId, ref: 'Sticker', required: false }],
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
