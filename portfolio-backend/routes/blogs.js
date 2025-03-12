const express = require('express');
const Blog = require('../models/Blog');

const router = express.Router();

// Add a blog
router.post('/', async (req, res) => {
    const { title, content } = req.body;
    try {
        const blog = new Blog({ title, content });
        await blog.save();
        res.status(201).json({ message: 'Blog added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single blog by ID
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json(blog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a blog by ID
router.put('/:id', async (req, res) => {
    const { title, content } = req.body;
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json(blog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a blog by ID
router.delete('/:id', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json({ message: 'Blog deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;