const express = require('express');
const passport = require('passport');
const generateToken = require('../utils/generateToken');

const router = express.Router();

// Initiate Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth Callback
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const token = generateToken(req.user.id);
    
    // Redirect to frontend with token (or respond with JSON)
    res.redirect(`http://localhost:3000/dashboard?token=${token}`);
    // Alternatively, send a JSON response:
    // res.status(200).json({ message: 'Login successful', token });
  }
);
// GitHub Authentication Route
router.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

// GitHub Callback Route
router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication
    res.json({
      message: 'GitHub authentication successful!',
      user: req.user
    });
  }
);

module.exports = router;
