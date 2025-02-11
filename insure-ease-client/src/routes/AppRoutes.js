import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/public/LandingPage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Home from '../pages/user/Home';
import MyPolicies from '../pages/user/MyPolicies';
import BuyPolicies from '../pages/user/BuyPolicies';
import Cart from '../pages/user/Cart';
import Payment from '../pages/user/Payment';
import AdminDashboard from '../pages/admin/AdminDashboard';
import ManagePolicies from '../pages/admin/ManagePolicies';
import Unauthorized from '../pages/error/Unauthorized';
import ProtectedRoute from '../components/common/ProtectedRoute';

const AppRoutes = () => (
  <Router>
    <Routes>
      {/* Guest Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User Routes */}
      <Route
        path="/home"
        element={
          <ProtectedRoute role="user">
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-policies"
        element={
          <ProtectedRoute role="user">
            <MyPolicies />
          </ProtectedRoute>
        }
      />
      <Route
        path="/buy-policies"
        element={
          <ProtectedRoute role="user">
            <BuyPolicies />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute role="user">
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <ProtectedRoute role="user">
            <Payment />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/manage-policies"
        element={
          <ProtectedRoute role="admin">
            <ManagePolicies />
          </ProtectedRoute>
        }
      />

      {/* Error Handling */}
      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  </Router>
);

export default AppRoutes;
