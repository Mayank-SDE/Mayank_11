import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, role }) => {
  const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);

  if (!isAuthenticated && role !== 'guest') {
    // Not authenticated, redirect to login
    return <Navigate to="/login" />;
  }

  if (role === 'admin' && !isAdmin) {
    // Not an admin, redirect to unauthorized page
    return <Navigate to="/unauthorized" />;
  }

  if (role === 'user' && isAdmin) {
    // Admin trying to access user-only page, redirect to admin dashboard
    return <Navigate to="/admin/dashboard" />;
  }

  // Authorized access
  return children;
};

export default ProtectedRoute;
