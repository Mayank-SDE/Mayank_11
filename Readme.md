# Insurance Policy Management System

## Overview
The **Insurance Policy Management System** is a full-stack application designed to manage insurance policies for clients and administrators. The system features user authentication, policy management, insurance calculators, and payment processing. This project showcases expertise in **React.js**, **Redux Toolkit**, **Node.js**, **MS.NET**, and **Spring Boot**, following a **microservices architecture**.

## Features

### User Module
1. **Authentication:**
   - Register, login, and logout with **JWT** authentication.
   - Third-party login via **Google** and **GitHub** (OAuth 2.0).

2. **Policy Management:**
   - Browse insurance policies in four categories:
     - Life Insurance
     - Car Insurance
     - Health Insurance
     - House Insurance
   - Detailed policy descriptions.
   - Insurance calculators for each category.

3. **Shopping Cart & Payments:**
   - Add policies to the cart.
   - Secure payment processing with **Stripe**.
   - Purchased policies are listed under "My Policies."

4. **Approval Workflow:**
   - View the approval status of purchased policies.
   - Admin approval required for policy activation.

5. **Profile Management:**
   - Update personal details.
   - View purchase history and policy details.

### Admin Module
1. **Dashboard:**
   - Overview of system metrics and analytics.
   - Data visualizations using **Recharts** (bar charts, pie charts).

2. **Policy Management:**
   - Add, edit, and delete insurance policies.
   - Approve or reject insurance requests from users.

3. **User Management:**
   - View, manage, and delete users.

4. **Analytics:**
   - Insights into sales, user activities, and policy statistics.

## Tech Stack
- **Frontend:** React.js, Redux Toolkit, Bootstrap 5.3.3
- **Backend:** Node.js (Express), MS.NET, Spring Boot
- **Authentication:** JWT, OAuth 2.0 (Google, GitHub)
- **Database:** MySQL
- **Payments:** Stripe
- **Charts & Analytics:** Recharts
- **Testing:** Selenium, JUnit

## Project Structure
```plaintext
insurance-policy-management-system/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── UserDashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── Profile.jsx
│   │   ├── NotFound.jsx
│   │   └── policies/
│   │       ├── CarInsurance.jsx
│   │       ├── LifeInsurance.jsx
│   │       ├── HealthInsurance.jsx
│   │       └── HouseInsurance.jsx
│   ├── features/
│   │   ├── auth/
│   │   │   ├── authSlice.js
│   │   │   └── authService.js
│   │   ├── policies/
│   │   │   ├── policySlice.js
│   │   │   └── policyService.js
│   │   ├── cart/
│   │   │   ├── cartSlice.js
│   │   │   └── cartService.js
│   │   └── admin/
│   │       ├── adminSlice.js
│   │       └── adminService.js
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── MyPolicies.jsx
│   │   ├── BuyPolicies.jsx
│   │   ├── Cart.jsx
│   │   └── Payment.jsx
│   ├── redux/
│   │   └── store.js
│   ├── App.jsx
│   ├── index.js
│   └── utils/
│       └── api.js
├── .env
├── package.json
├── README.md
└── node_modules/
```

## Development Workflow
1. **Frontend Development:**
   - Complete the UI components with hardcoded data.
   - Implement state management using Redux Toolkit.
   - Integrate role-based UI rendering.
   - Add validations and protected routes.

2. **Backend Development:**
   - Set up Node.js backend with Express and MySQL.
   - Implement authentication and user services.
   - Build services in MS.NET and Spring Boot for additional functionalities.

3. **API Integration:**
   - Replace hardcoded data with real API calls.
   - Implement error handling and data validation.

4. **Testing & Deployment:**
   - Perform unit testing using JUnit and Selenium.
   - Deploy the application and ensure cross-service communication.

## Conclusion
This **Insurance Policy Management System** is a comprehensive project designed to demonstrate full-stack development skills with a focus on modern frameworks and technologies. It offers robust functionalities for both users and administrators, providing a real-world application experience.

---

**Let's get started by building the frontend component by component!**

