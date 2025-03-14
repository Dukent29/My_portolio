const express = require('express');
const multer = require('multer');
const Project = require('../models/Project');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Add a project
router.post('/', upload.single('image'), async (req, res) => {
    const { title, description, technologies } = req.body;
    const image = req.file ? req.file.path : null;
    try {
        const project = new Project({ title, description, technologies: technologies.split(','), image });
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

// Get a single project by ID
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a project by ID
router.put('/:id', upload.single('image'), async (req, res) => {
    const { title, description, technologies } = req.body;
    const image = req.file ? req.file.path : req.body.image;
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            { title, description, technologies: technologies.split(','), image },
            { new: true }
        );
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a project by ID
router.delete('/:id', async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json({ message: 'Project deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;