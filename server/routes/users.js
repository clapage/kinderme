const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  if (user) {
    return res.status(400).send('User already exists');
  }
  const userId = await User.create(email, password);
  req.session.userId = userId;
  res.sendStatus(201);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  if (!user || !(await User.comparePassword(password, user.password))) {
    return res.status(400).send('Invalid email or password');
  }
  req.session.userId = user.id;
  res.sendStatus(200);
});

module.exports = router;
