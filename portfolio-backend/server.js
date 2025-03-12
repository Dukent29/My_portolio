// filepath: portfolio-backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/mongodb');
const projectRoutes = require('./routes/projects');
const blogRoutes = require('./routes/blogs');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));