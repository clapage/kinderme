const express = require('express');
const router = express.Router();

// @route POST api/users/signup
// @desc Register user
// @access Public
router.post('/signup', (req, res) => {
  res.send('Register');
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
  res.send('Login');
});

module.exports = router;
