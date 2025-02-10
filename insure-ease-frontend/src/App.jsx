import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useSelector } from 'react-redux';

// Importing components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import UserDashboard from './components/User/UserDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import Profile from './components/User/Profile';
import MyPolicies from './components/User/MyPolicies';
import BuyPolicies from './components/User/BuyPolicies';
import Cart from './components/User/Cart';
import Payment from './components/User/Payment';
import LifeInsurance from './components/Policies/LifeInsurance';
import HealthInsurance from './components/Policies/HealthInsurance';
import HomeInsurance from './components/Policies/HomeInsurance';
import CarInsurance from './components/Policies/CarInsurance';
import NotFound from './components/NotFound';

const App = () => {
  const { user } = useSelector((state) => state.auth);

  // Protected Route Component
  const ProtectedRoute = ({ children, role }) => {
    if (!user) {
      return <Navigate to="/login" />;
    } else if (role && user.role !== role) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />

          {/* Protected Routes for User */}
          <Route path="/dashboard" element={
            <ProtectedRoute role="user">
              <UserDashboard />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute role="user">
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/mypolicies" element={
            <ProtectedRoute role="user">
              <MyPolicies />
            </ProtectedRoute>
          } />
          <Route path="/buypolicies" element={
            <ProtectedRoute role="user">
              <BuyPolicies />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={
            <ProtectedRoute role="user">
              <Cart />
            </ProtectedRoute>
          } />
          <Route path="/payment" element={
            <ProtectedRoute role="user">
              <Payment />
            </ProtectedRoute>
          } />

          {/* Policy Details & Calculators */}
          <Route path="/policies/life" element={<LifeInsurance />} />
          <Route path="/policies/health" element={<HealthInsurance />} />
          <Route path="/policies/home" element={<HomeInsurance />} />
          <Route path="/policies/car" element={<CarInsurance />} />

          {/* Protected Routes for Admin */}
          <Route path="/admin" element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
