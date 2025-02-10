const express = require('express');
const cors = require('cors');
const passport = require('passport');
require('dotenv').config();
require('./config/db');           // Connect to MySQL
require('./config/passport');     // Passport OAuth configuration

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
