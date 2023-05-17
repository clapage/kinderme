const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();

app.use(cors()); // Enable All CORS Requests

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

global.db = db;

app.get('/', (req, res) => {
  res.send('Hello from server!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// adding user routes
//const userRoutes = require('./routes/users');
//app.use('/api/users', userRoutes);

// User Routes
app.use('/api/users', require('./routes/api/users'));


//new addition
const db = require('./config/db');
const User = require('./models/User');

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err));

db.sync();
