const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  canvasWidth: { type: String, required: true },
  canvasHeight: { type: String, required: true },
  images: [{ type: Object, required: false }]
});

module.exports = mongoose.model('Project', projectSchema);
