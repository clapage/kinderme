const bcrypt = require('bcrypt');
const db = require('../db');

const User = {
  async create(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.query(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [email, hashedPassword]
    );
    return result.insertId;
  },

  async findByEmail(email) {
    const result = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return result[0];
  },

  async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }
};

module.exports = User;
