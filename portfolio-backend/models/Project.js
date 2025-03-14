// filepath: portfolio-backend/models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    image: { type: String, required: true }, // Add image field
});

module.exports = mongoose.model('Project', ProjectSchema);