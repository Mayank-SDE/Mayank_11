const db = require('../config/db');

// Create a new user
const createUser = (userData) => {
  const {
    firstName,
    lastName,
    email,
    password,
    phone,
    address,
    dob,
    gender,
    securityQuestion,
    securityAnswer,
  } = userData;

  const query = `
    INSERT INTO users (
      first_name, last_name, email, password, phone, address, dob, gender, security_question, security_answer, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
  `;

  // Remove .promise() here
  return db.query(query, [
    firstName,
    lastName,
    email,
    password,
    phone,
    address,
    dob,
    gender,
    securityQuestion,
    securityAnswer
  ]);
};

// Find user by email
const findUserByEmail = (email) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  
  // Remove .promise() here
  return db.query(query, [email]).then(([rows]) => rows[0]);
};

// Update user's last login time
const updateLastLogin = (userId) => {
  const query = 'UPDATE users SET updated_at = NOW() WHERE id = ?';

  // Remove .promise() here
  return db.query(query, [userId]);
};

module.exports = {
  createUser,
  findUserByEmail,
  updateLastLogin,
};
