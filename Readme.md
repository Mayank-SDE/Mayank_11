# Insurance Policy Management System Documentation

This document provides an overview of the Insurance Policy Management System, including its folder structure, responsibilities for different services, and API endpoints.

---

## Folder Structure

### **Frontend (React)**

    
        src/
        │
        ├── app/                        # Redux Store Setup
        │   └── store.js
        │
        ├── assets/                     # Static files like images, icons, etc.
        │   ├── images/
        │   └── icons/
        │
        ├── components/                 # Reusable UI components
        │   ├── common/
        │   │   ├── Navbar.jsx
        │   │   ├── Sidebar.jsx
        │   │   ├── Footer.jsx
        │   │   └── ProtectedRoute.jsx   # Component to handle route restrictions
        │   ├── insurance/
        │   │   ├── PolicyCard.jsx
        │   │   ├── PolicyList.jsx
        │   │   └── PolicyDetails.jsx
        │   ├── cart/
        │   │   ├── CartItem.jsx
        │   │   ├── CartList.jsx
        │   │   └── CheckoutForm.jsx
        │   └── dashboard/
        │       ├── DashboardCard.jsx
        │       ├── DashboardStats.jsx
        │       └── DashboardChart.jsx
        │
        ├── features/                   # Redux Slices for state management
        │   ├── auth/                   
        │   │   ├── authSlice.js        # Handles authentication state (user, admin, guest)
        │   │   ├── authThunks.js       # Async actions (e.g., login, logout, register)
        │   │   └── authSelectors.js    # Selectors for accessing auth state
        │   ├── cart/
        │   │   ├── cartSlice.js        # Manages cart items
        │   │   ├── cartThunks.js       # Async actions for cart
        │   │   └── cartSelectors.js    # Selectors for accessing cart state
        │   ├── policies/
        │   │   ├── policySlice.js      # Manages insurance policies
        │   │   ├── policyThunks.js     # API calls related to policies
        │   │   └── policySelectors.js  # Selectors for policy-related state
        │   ├── admin/
        │   │   ├── adminSlice.js       # Admin CRUD operations
        │   │   ├── adminThunks.js      # API calls for admin actions
        │   │   └── adminSelectors.js   # Selectors for admin state
        │   └── ui/
        │       ├── uiSlice.js          # Global UI state (e.g., loading, modals)
        │       ├── uiActions.js        # Actions for UI state
        │       └── uiSelectors.js      # Selectors for UI state
        │
        ├── pages/                      # Page components mapped to routes
        │   ├── auth/
        │   │   ├── Login.jsx
        │   │   ├── Register.jsx
        │   │   └── ForgotPassword.jsx
        │   ├── public/
        │   │   ├── LandingPage.jsx
        │   │   ├── AboutUs.jsx
        │   │   └── ContactUs.jsx
        │   ├── user/
        │   │   ├── Home.jsx
        │   │   ├── MyPolicies.jsx
        │   │   ├── BuyPolicies.jsx
        │   │   ├── Cart.jsx
        │   │   ├── Payment.jsx
        │   │   └── OrderSummary.jsx
        │   ├── admin/
        │   │   ├── AdminDashboard.jsx
        │   │   ├── ManageUsers.jsx
        │   │   ├── ManagePolicies.jsx
        │   │   ├── PolicyRequests.jsx
        │   │   ├── Transactions.jsx
        │   │   ├── Reports.jsx
        │   │   └── AdminCharts.jsx
        │   └── error/
        │       ├── NotFound.jsx
        │       └── Unauthorized.jsx
        │
        ├── calculators/                # Insurance Calculators
        │   ├── LifeInsuranceCalculator.jsx
        │   ├── HealthInsuranceCalculator.jsx
        │   ├── CarInsuranceCalculator.jsx
        │   ├── HomeInsuranceCalculator.jsx
        │   └── CalculatorUtils.js       # Utility functions for calculations
        │
        ├── routes/                     # App Routing Configuration
        │   ├── AppRoutes.js
        │   ├── GuestRoutes.js
        │   ├── UserRoutes.js
        │   ├── AdminRoutes.js
        │   └── RouteConfig.js           # Centralized route configuration
        │
        ├── styles/                     # Global and component-specific styles
        │   ├── main.css
        │   ├── theme.css
        │   ├── auth.css
        │   ├── dashboard.css
        │   ├── insurance.css
        │   └── cart.css
        │
        ├── utils/                      # Utility functions
        │   ├── api.js                   # API calls (later when backend is added)
        │   ├── validators.js            # Form validation functions
        │   ├── formatters.js            # Formatting functions (currency, date)
        │   └── constants.js             # Global constants
        │
        ├── App.js                      # Main App Component
        ├── index.js                    # Entry point
        └── config.js                   # Configuration settings (API endpoints, etc.)
    # Insurance Policy Management System Documentation

This document provides an overview of the Insurance Policy Management System, including its folder structure, responsibilities for different services, and API endpoints.

---

## **Node.js User Service Responsibilities:**

### 1. **User Authentication & Authorization:**
   - Login & Logout for both users and admins.
   - Third-Party Login via providers like Google, GitHub, LinkedIn (OAuth).
   - Admin Login & Logout for managing admin-specific access.

### 2. **User Account Management:**
   - User Registration for new users.
   - Forgot Password functionality with security questions or email recovery.
   - Password Management (reset, change).

### 3. **User Data Management:**
   - Storing user information in the `users` table in the `insurance_db` MySQL database.
   - Managing user roles and permissions (e.g., distinguishing between regular users and admins).

### 4. **Security & Token Management:**
   - Handling JWT tokens for session management.
   - Ensuring secure authentication and protecting API routes.

---

## **Spring Boot Services:**

### 1. **Policy Management:**
   - CRUD operations for insurance policies (Life, Health, Home, Car).
   - **API Endpoints:**
     - `GET /api/policies`  
       Fetches all policies.
     - `POST /api/policies`  
       Creates a new policy.
     - `GET /api/policies/{id}`  
       Fetches a policy by ID.
     - `PUT /api/policies/{id}`  
       Updates a policy by ID.
     - `DELETE /api/policies/{id}`  
       Deletes a policy by ID.

### 2. **Claims Management:**
   - File, view, and process insurance claims.
   - **API Endpoints:**
     - `GET /api/claims`  
       Fetches all claims.
     - `POST /api/claims`  
       Submits a new claim.
     - `GET /api/claims/{id}`  
       Fetches a claim by ID.
     - `PUT /api/claims/{id}`  
       Updates a claim by ID.
     - `DELETE /api/claims/{id}`  
       Deletes a claim by ID.
     - `GET /api/claims/user/{userId}`  
       Fetches claims by user ID.
     - `PUT /api/claims/{id}/status`  
       Updates the status of a claim (e.g., Pending, Approved, Rejected).

### 3. **Premium Calculators:**
   - Logic for calculating insurance premiums based on policy type and user inputs.

   **Test API Endpoints:**

   #### **Life Insurance Premium Calculation**
   - **POST /api/premium/life**
   - **Request Body:**
     ```json
     {
       "age": 30,
       "sumAssured": 500000,
       "tenure": 20
     }
     ```
   - **Response:**
     ```json
     1200.50
     ```

   #### **Health Insurance Premium Calculation**
   - **POST /api/premium/health**
   - **Request Body:**
     ```json
     {
       "age": 40,
       "coverageAmount": 300000,
       "preExistingConditions": true
     }
     ```
   - **Response:**
     ```json
     1800.75
     ```

   #### **Car Insurance Premium Calculation**
   - **POST /api/premium/car**
   - **Request Body:**
     ```json
     {
       "carModel": "Toyota Corolla",
       "carAge": 5,
       "coverageAmount": 100000
     }
     ```
   - **Response:**
     ```json
     250.0
     ```

   #### **Home Insurance Premium Calculation**
   - **POST /api/premium/home**
   - **Request Body:**
     ```json
     {
       "propertyValue": 500000,
       "location": "New York",
       "coverageAmount": 200000
     }
     ```
   - **Response:**
     ```json
     750.25
     ```

---

## **MS .NET Service Responsibilities:**

### 1. **Payment Processing:**
   - Handle payments, invoices, and transaction history.
   - **API Endpoints:**
     - `POST /api/payment`  
       Initiates a payment for a policy.
     - `GET /api/transactions/{userId}`  
       Fetches transaction history for a user.

### 2. **Cart Management:**
   - Add/remove policies to/from cart, manage cart items.
   - **API Endpoints:**
     - `POST /api/cart`  
       Adds a policy to the user's cart.
     - `DELETE /api/cart/{cartItemId}`  
       Removes a policy from the user's cart.

### 3. **Admin Dashboard:**
   - Advanced features like reports, analytics, and approvals.
   - **API Endpoints:**
     - `GET /api/admin/reports`  
       Fetches reports for the admin dashboard.
     - `GET /api/admin/transactions`  
       Fetches transaction details for the admin dashboard.
     - `GET /api/admin/users`  
       Fetches all users for admin management.
     - `GET /api/admin/policies`  
       Fetches all policies for admin management.
     - `GET /api/admin/claims`  
       Fetches all claims for admin management.
     - `PUT /api/admin/policies/{id}/approve`  
       Approves a policy.
     - `PUT /api/admin/claims/{id}/approve`  
       Approves a claim.
     - `PUT /api/admin/claims/{id}/reject`  
       Rejects a claim.

---

