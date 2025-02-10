CREATE DATABASE insurance_db;
USE insurance_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255),
  phone VARCHAR(20),
  address VARCHAR(255),
  dob DATE,
  gender ENUM('Male', 'Female', 'Other'),
  security_question VARCHAR(100),
  security_answer VARCHAR(100),
  oauth_provider ENUM('local', 'google', 'github', 'linkedin') DEFAULT 'local',
  oauth_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
