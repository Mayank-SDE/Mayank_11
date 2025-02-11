// src/pages/auth/Login.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { loginSuccess } from '../../redux/slices/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials for demo (replace with API call later)
    if (email === 'user@example.com' && password === 'password123') {
      dispatch(loginSuccess({ email, role: 'user' }));
      toast.success('Login Successful!');
      navigate('/my-policies');
    } else if (email === 'admin@example.com' && password === 'admin123') {
      dispatch(loginSuccess({ email, role: 'admin' }));
      toast.success('Admin Login Successful!');
      navigate('/admin/dashboard');
    } else {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>

          <div className="text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <div className="text-center my-3">
            <p>or login with</p>
            <button className="btn btn-outline-danger w-100 mb-2">
              <FaGoogle /> Login with Google
            </button>
            <button className="btn btn-outline-dark w-100 mb-2">
              <FaGithub /> Login with GitHub
            </button>
          </div>

          <div className="text-center">
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
            <button className="btn btn-link mt-2" onClick={() => navigate('/')}>Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
