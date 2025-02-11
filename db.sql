CREATE DATABASE insurance_db;
USE insurance_db;
DROP TABLE IF EXISTS claims;
DROP TABLE IF EXISTS policies;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
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
CREATE TABLE policies (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    policy_name VARCHAR(255) NOT NULL,
    policy_type VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    premium_amount DOUBLE NOT NULL
);
CREATE TABLE claims (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    policy_id BIGINT NOT NULL,
    claim_amount DECIMAL(10, 2) NOT NULL,
    claim_status ENUM('Pending', 'Approved', 'Rejected', 'Processing') DEFAULT 'Pending',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (policy_id) REFERENCES policies(id)
);
SHOW TABLES;
DESC users;
DESC policies;
DESC claims;
INSERT INTO users (first_name, last_name, email, password, phone, address)
VALUES 
('John', 'Doe', 'john.doe@example.com', 'password123', '1234567890', '123 Elm Street'),
('Jane', 'Smith', 'jane.smith@example.com', 'password456', '0987654321', '456 Oak Avenue');
INSERT INTO policies (policy_name, policy_type, description, premium_amount)
VALUES 
('Standard Health Insurance', 'Health', 'Covers medical expenses.', 750.00),
('Home Protection Plan', 'Home', 'Covers damages due to disasters.', 450.75),
('Full Coverage Car Insurance', 'Car', 'Comprehensive car insurance.', 980.25),
('Comprehensive Life Insurance', 'Life', 'Life coverage with benefits.', 1200.50);
INSERT INTO claims (user_id, policy_id, claim_amount, description)
VALUES 
(1, 1, 500.00, 'Medical expenses for surgery'),
(2, 3, 800.00, 'Car accident damage claim');
