import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    dob: '',
    gender: '',
    securityQuestion: '',
    securityAnswer: '',
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (formData.securityAnswer.trim().split(' ').length > 1) {
      toast.error("Security answer must be one word.");
      return;
    }

    console.log('Form Data Submitted:', formData);
    toast.success("Registration Successful!");

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      address: '',
      dob: '',
      gender: '',
      securityQuestion: '',
      securityAnswer: '',
      termsAgreed: false,
    });

    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h2 className="text-center mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea className="form-control" id="address" name="address" rows="2" value={formData.address} onChange={handleChange} required></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Gender</label>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="male" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required />
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="female" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} required />
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="other" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} required />
            <label className="form-check-label" htmlFor="other">Other</label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="securityQuestion" className="form-label">Security Question</label>
          <select className="form-select" id="securityQuestion" name="securityQuestion" value={formData.securityQuestion} onChange={handleChange} required>
            <option value="">Select a question...</option>
            <option value="petName">What is your pet’s name?</option>
            <option value="birthCity">In which city were you born?</option>
            <option value="favoriteTeacher">What’s your favorite teacher’s name?</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="securityAnswer" className="form-label">Answer <small className="text-muted">(One word only)</small></label>
          <input type="text" className="form-control" id="securityAnswer" name="securityAnswer" value={formData.securityAnswer} onChange={handleChange} required />
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="termsAgreed" name="termsAgreed" checked={formData.termsAgreed} onChange={handleChange} required />
          <label className="form-check-label" htmlFor="termsAgreed">
            I agree to the Terms and Conditions
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/login')}>Back to Login</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Home</button>
        </div>
      </form>
    </div>
  );
};

export default Register;