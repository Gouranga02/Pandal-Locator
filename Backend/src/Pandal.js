const mongoose = require('mongoose');

const PandalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  images: [String], // Array of image URLs
  videos: [String], // Array of video URLs
  description: String,
  createdAt: { type: Date, default: Date.now },
});

const Pandal = mongoose.model('Pandal', PandalSchema);

module.exports = Pandal;
