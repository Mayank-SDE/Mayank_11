import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ProtectedRoute from './components/common/ProtectedRoute';

// Common Pages
import LoginPage from './modules/common/pages/LoginPage';
import RegisterPage from './modules/common/pages/RegisterPage';

// User Module Pages
import HomePage from './modules/user/pages/HomePage';
import PolicyDetailPage from './modules/user/pages/PolicyDetailPage';
import CartPage from './modules/user/pages/CartPage';
import MyPurchasesPage from './modules/user/pages/MyPurchasesPage';
import ProfilePage from './modules/user/pages/ProfilePage';
import CheckoutPage from './modules/user/pages/CheckoutPage';

// Admin Module Pages
import AdminDashboard from './modules/admin/pages/AdminDashboard';
import ManagePoliciesPage from './modules/admin/pages/ManagePoliciesPage';
import ManageCustomersPage from './modules/admin/pages/ManageCustomersPage';
import AnalyticsPage from './modules/admin/pages/AnalyticsPage';

import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-fill container mt-4">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* User Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/policy/:id" element={<PolicyDetailPage />} />
            <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path="/purchases" element={<ProtectedRoute><MyPurchasesPage /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/policies" element={<ProtectedRoute role="admin"><ManagePoliciesPage /></ProtectedRoute>} />
            <Route path="/admin/customers" element={<ProtectedRoute role="admin"><ManageCustomersPage /></ProtectedRoute>} />
            <Route path="/admin/analytics" element={<ProtectedRoute role="admin"><AnalyticsPage /></ProtectedRoute>} />

            {/* Redirect for unknown routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
