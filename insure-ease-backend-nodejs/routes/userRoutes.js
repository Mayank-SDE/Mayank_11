// /routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const protect=require("../middlewares/authMiddleware");
// Register Route
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser); 

// Protected Routes
router.get('/profile', protect, userController.getUserProfile);

module.exports = router;
