import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import BuyPolicies from './pages/user/BuyPolicies';
import Cart from './pages/user/Cart';
import MyPolicies from './pages/user/MyPolicies';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import CreatePolicy from './pages/admin/CreatePolicy';
import ViewPolicies from './pages/admin/ViewPolicies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes for Users */}
        <Route path="/buy-policies" element={
          <ProtectedRoute>
            <BuyPolicies />
          </ProtectedRoute>
        } />
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } />
        <Route path="/my-policies" element={
          <ProtectedRoute>
            <MyPolicies />
          </ProtectedRoute>
        } />

        {/* Protected Route for Admin */}
        <Route path="/admin-dashboard" element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        } />
      <Route path="/admin-dashboard" element={
  <AdminRoute>
    <AdminDashboard />
  </AdminRoute>
} />
<Route path="/create-policy" element={
  <AdminRoute>
    <CreatePolicy />
  </AdminRoute>
} />
<Route path="/view-policies" element={
  <AdminRoute>
    <ViewPolicies />
  </AdminRoute>
} />
<Route path="/edit-policy/:id" element={
  <AdminRoute>
    <EditPolicy />
  </AdminRoute>
} />


        {/* Default Route */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
