# Insurance Policy Management System
## Folder Structure
# Online Insurance Policy Management System

## **Project Overview:**
The Online Insurance Policy Management System is a comprehensive web application designed to streamline the process of purchasing, managing, and administering insurance policies. The system caters to both clients and administrators with distinct functionalities and a secure, responsive user interface.

---

## **Development Sequence:**

### **1. Project Setup**
- Initialize the project with Vite (for faster builds) or Create React App.
- Install dependencies:
  ```bash
  npm install react-router-dom redux react-redux @reduxjs/toolkit bootstrap axios react-toastify
  npm install @stripe/stripe-js @fortawesome/fontawesome-free
  ```

### **2. Directory Setup**
- Create the folder structure as outlined below.
- Set up `App.jsx` with routing using **React Router**.
- Configure **Bootstrap** and global styles in `src/styles/main.css`.

### **3. Configure Redux Store**
- Create `src/app/store.js` and configure the Redux store.
- Set up **authSlice** in `src/features/auth/authSlice.js` for managing authentication state (login, logout, user info).

### **4. Authentication (Common)**
- Build **Reusable Auth Components**:
  - `modules/common/components/AuthForm.jsx`: A single form for both login and registration.
  - `modules/common/pages/LoginPage.jsx` and `RegisterPage.jsx`: Use `AuthForm` here.
- Set up API calls in `src/api/authAPI.js`.
- Implement token management with `utils/authHelpers.js`.
- Test login and registration flows using mock APIs or hardcoded data.

### **5. Protected Routing**
- Create `components/common/ProtectedRoute.jsx` to protect **User** and **Admin** routes.
- Update `App.jsx` to separate **User** and **Admin** dashboards with protected routes.

### **6. User Module Development**
**(Start building what the end-users will see first!)**
- **Landing Page**:
  - `modules/user/pages/HomePage.jsx`: Include the carousel showcasing **Health**, **Car**, **Life**, **House** insurances.
  - Create `components/user/InsuranceCarousel.jsx` to handle carousel UI.
- **Policy Browsing**:
  - `modules/user/pages/PolicyDetailPage.jsx`: Show detailed insurance info when the user clicks on a carousel image.
  - Create `components/user/PolicyList.jsx` to display policies from different companies.
- **Cart & Purchases**:
  - `modules/user/pages/CartPage.jsx`: Manage selected policies.
  - `modules/user/pages/MyPurchasesPage.jsx`: Display purchased policies.
- **Profile**:
  - `modules/user/pages/ProfilePage.jsx`: User profile with options to update info.
  - Use `components/user/ProfileSummary.jsx` for profile overview.
- **Payments**:
  - Integrate **Stripe** in `modules/user/pages/CheckoutPage.jsx`.

### **7. Admin Module Development**
- **Admin Dashboard**:
  - `modules/admin/pages/AdminDashboard.jsx`: Overview of stats with charts.
  - Create `components/admin/DashboardWidget.jsx` for quick stats.
- **Manage Policies**:
  - `modules/admin/pages/ManagePoliciesPage.jsx`: Add/Edit/Delete policies.
  - Use `components/admin/PolicyManager.jsx` for UI.
- **Manage Customers**:
  - `modules/admin/pages/ManageCustomersPage.jsx`: View and delete customers.
  - Use `components/admin/CustomerTable.jsx` for displaying customers.
- **Analytics**:
  - `modules/admin/pages/AnalyticsPage.jsx`: Charts (Bar, Pie) for insights.
  - Create `components/admin/DashboardCharts.jsx` for reusable charts.

### **8. API Integration**
- Connect the **frontend** with your **backend services** (Node.js, Spring Boot, .NET).
- Implement API calls in `src/api/userAPI.js` and `adminAPI.js`.
- Update Redux slices to handle data fetching and state management.

### **9. Testing & Optimization**
- Write **unit tests** for components using **Jest** or **React Testing Library**.
- Optimize components, remove unnecessary re-renders.
- Ensure responsive design using Bootstrap classes.

### **10. Final Touches**
- Add **Toast notifications** (`react-toastify`) for feedback on actions.
- Customize Bootstrap with `styles/bootstrap-overrides.css` for a unique look.
- Deploy the project on **Vercel** or **Netlify**.

---

## **Directory Structure:**

```plaintext
src/
├── api/                          # API calls centralized for both user and admin modules
│   ├── authAPI.js
│   ├── policyAPI.js
│   ├── cartAPI.js
│   └── adminAPI.js
├── app/                          # Redux store setup and configuration
│   └── store.js
├── assets/                       # Static assets like images and icons
├── components/                   # Common reusable components
│   ├── common/                   # Shared components across User and Admin
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── Loader.jsx
├── features/                     # Redux slices for state management
│   ├── auth/
│   │   └── authSlice.js
│   ├── policy/
│   │   └── policySlice.js
│   ├── cart/
│   │   └── cartSlice.js
│   └── admin/
│       └── adminSlice.js
├── modules/                      # Separation of concerns for User and Admin modules
│   ├── common/                   # Common pages like login and registration
│   │   ├── components/
│   │   │   └── AuthForm.jsx
│   │   └── pages/
│   │       ├── LoginPage.jsx
│   │       └── RegisterPage.jsx
│   ├── user/
│   │   ├── components/
│   │   │   ├── InsuranceCard.jsx
│   │   │   ├── PolicyList.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── ProfileSummary.jsx
│   │   │   └── StatusBadge.jsx
│   │   └── pages/
│   │       ├── HomePage.jsx
│   │       ├── PolicyDetailPage.jsx
│   │       ├── ProfilePage.jsx
│   │       ├── MyPurchasesPage.jsx
│   │       ├── CartPage.jsx
│   │       └── CheckoutPage.jsx
│   └── admin/
│       ├── components/
│       │   ├── CustomerTable.jsx
│       │   ├── PolicyManager.jsx
│       │   └── DashboardCharts.jsx
│       └── pages/
│           ├── AdminDashboard.jsx
│           ├── ManagePoliciesPage.jsx
│           ├── ManageCustomersPage.jsx
│           └── AnalyticsPage.jsx
├── styles/                       # Global styles and Bootstrap customizations
│   └── main.css
├── utils/                        # Utility functions and helpers
│   ├── authHelpers.js
│   └── formatDate.js
├── App.jsx                       # Main application component
└── index.js                      # Application entry point
```

---

## **What to Start First?**
1. **Project Setup**
2. **Common Authentication** (`modules/common/`): Login & Registration.
3. **User Module** (`modules/user/`): Landing Page with Carousel.
4. **Admin Module** (`modules/admin/`): Dashboard and Policy Management.

---

Let me know when you're ready to dive into building specific pages, and we'll work through each step together! 🚀
