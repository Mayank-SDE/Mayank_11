# Insurance Policy Management System
## Folder Structure
src/
├── api/                        # API calls (User, Admin, and Common services)
│   ├── userAPI.js              # User-related API endpoints (policies, purchases)
│   ├── adminAPI.js             # Admin-related API endpoints (dashboard, policies)
│   ├── authAPI.js              # Authentication API for login, register (shared)
│   └── paymentAPI.js           # Stripe payment-related API calls
│
├── app/                        # Redux store setup and slices integration
│   └── store.js                # Centralized Redux store configuration
│
├── assets/                     # Static files like images, logos, icons
│   ├── images/                 # Insurance carousel images (health, car, etc.)
│   └── icons/                  # Common icons for UI
│
├── components/                 # Reusable components for the whole app
│   ├── common/                 # Components shared by both User & Admin
│   │   ├── Navbar.jsx          # Responsive navigation bar
│   │   ├── Footer.jsx          # Common footer
│   │   ├── ProtectedRoute.jsx  # Route protection logic
│   │   └── Loader.jsx          # Loader/spinner for async calls
│   │
│   ├── user/                   # User-specific UI components
│   │   ├── InsuranceCard.jsx   # Display insurance details
│   │   ├── PolicyList.jsx      # List of available policies
│   │   ├── Cart.jsx            # User's cart for selected policies
│   │   └── ProfileSummary.jsx  # Profile overview widget
│   │
│   └── admin/                  # Admin-specific UI components
│       ├── DashboardWidget.jsx # Dashboard cards for quick stats
│       ├── CustomerTable.jsx   # Customer management table
│       └── PolicyManager.jsx   # Add/Edit/Delete policies
│
├── features/                   # Redux slices for state management
│   ├── auth/                   # Authentication slice (shared)
│   │   └── authSlice.js
│   │
│   ├── user/                   # User-specific slices
│   │   ├── policySlice.js      # Policies for browsing and purchase
│   │   ├── cartSlice.js        # Cart management
│   │   └── profileSlice.js     # Profile info management
│   │
│   └── admin/                  # Admin-specific slices
│       ├── dashboardSlice.js   # Dashboard analytics
│       └── customerSlice.js    # Customer data management
│
├── modules/                    # Full separation between User, Admin, and Common
│   ├── common/                 # Shared pages (Login, Register, 404)
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx   # Shared login page for User & Admin
│   │   │   ├── RegisterPage.jsx# Registration page for new users
│   │   │   └── NotFound.jsx    # 404 Page Not Found
│   │   └── components/         # Common components used in shared pages
│   │       └── AuthForm.jsx    # Reusable form component for login & register
│   │
│   ├── user/                   # User-specific pages & components
│   │   ├── pages/
│   │   │   ├── HomePage.jsx    # Landing page with carousel and policies
│   │   │   ├── PolicyDetailPage.jsx # Detailed view of each insurance policy
│   │   │   ├── ProfilePage.jsx # User profile management
│   │   │   ├── MyPurchasesPage.jsx # View purchased policies
│   │   │   ├── CartPage.jsx    # View and manage cart
│   │   │   └── CheckoutPage.jsx# Stripe payment processing
│   │   └── components/         # User-specific UI components
│   │       └── InsuranceCarousel.jsx # Carousel showcasing the 4 main insurances
│   │
│   └── admin/                  # Admin-specific pages & components
│       ├── pages/
│       │   ├── AdminDashboard.jsx # Overview with charts and stats
│       │   ├── ManagePoliciesPage.jsx # CRUD operations for policies
│       │   ├── ManageCustomersPage.jsx # View/delete customer data
│       │   └── AnalyticsPage.jsx # Charts (Bar, Pie) for insights
│       └── components/         # Admin-specific UI components
│           └── DashboardCharts.jsx # Reusable chart components (Bar, Pie)
│
├── styles/                     # Global styles and Bootstrap customization
│   ├── main.css                # Global CSS
│   └── bootstrap-overrides.css # Bootstrap overrides for theme
│
├── utils/                      # Helper functions and utilities
│   ├── authHelpers.js          # Token management, route protection helpers
│   └── formatDate.js           # Date formatting functions
│
├── App.jsx                     # Root app component with routing setup
└── index.js                    # Application entry point

