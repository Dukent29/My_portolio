// filepath: portfolio-backend/routes/projects.js
const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

// Add a project
router.post('/', async (req, res) => {
    const { title, description, technologies } = req.body;
    try {
        const project = new Project({ title, description, technologies });
        await project.save();
        res.status(201).json({ message: 'Project added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;