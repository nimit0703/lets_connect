const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { dbConnect } = require('./config/db');
const { mockDbConnect } = require('./config/mockDb'); // Import mock DB connect

const authRoutes = require('./routes/authRoutes');
// const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');
// const chatRoutes = require('./routes/chatRoutes');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const useMockDb = process.env.USE_MOCK_DB === 'true'; // Flag to toggle mock DB
const connectToDb = useMockDb ? mockDbConnect : dbConnect;

// Database connection
connectToDb();

// Routes
app.use('/api/posts', authRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/chats', chatRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
