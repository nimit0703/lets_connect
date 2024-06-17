const express = require('express');
const passport = require('passport');
const router = express.Router();

// Redirect to Google for authentication
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

// Handle the callback from Google
router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/', // Redirect to home on failure
}), (req, res) => {
  // Successful authentication
  res.redirect('http://localhost:5173'); // Redirect to your frontend
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.send('Logged out');
});

module.exports = router;
