const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  images: [{ type: String }],
  comments: [{
    body: { type: String, trim: true, required: true },
    user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
  }, {
    timestamps: true
  }]
});

module.exports = mongoose.model('Project', projectSchema);
