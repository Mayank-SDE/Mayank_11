const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const generateToken = require('../utils/generateToken');

// Register a new user
exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password, phone, address, dob, gender, securityQuestion, securityAnswer } = req.body;

  if (!firstName || !lastName || !email || !password || !phone || !address || !dob || !gender || !securityQuestion || !securityAnswer) {
    return res.status(400).json({ message: 'Please fill all required fields' });
  }

  try {
    const existingUser = await userModel.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await userModel.createUser({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      address,
      dob,
      gender,
      securityQuestion,
      securityAnswer,
    });

    const userId = result.insertId;

    const token = generateToken(userId);
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: userId,
        firstName,
        lastName,
        email,
      },
      token,
    });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Please enter both email and password' });
    }
  
    try {
      const user = await userModel.findUserByEmail(email);
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const token = generateToken(user.id);
      res.status(200).json({
        message: 'Login successful',
        user: {
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
        },
        token,
      });
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };

  exports.getUserProfile = async (req, res) => {
    if (req.user) {
      res.status(200).json({
        id: req.user.id,
        firstName: req.user.first_name,
        lastName: req.user.last_name,
        email: req.user.email,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  };