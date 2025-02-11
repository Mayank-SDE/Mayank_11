import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePolicy } from '../../redux/slices/policySlice';
import { toast } from 'react-toastify';

const EditPolicy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const policies = useSelector(state => state.policy.policies);
  
  const policyToEdit = policies.find(policy => policy.id === parseInt(id));
  
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    premium: '',
    description: '',
  });

  useEffect(() => {
    if (policyToEdit) {
      setFormData(policyToEdit);
    } else {
      toast.error("Policy not found!");
      navigate('/view-policies');
    }
  }, [policyToEdit, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePolicy({ ...formData, id: parseInt(id) }));
    toast.success("Policy updated successfully!");
    navigate('/view-policies');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Policy</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Policy Name</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Policy Type</label>
          <input type="text" name="type" className="form-control" value={formData.type} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Premium Amount</label>
          <input type="number" name="premium" className="form-control" value={formData.premium} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" value={formData.description} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary w-100">Update Policy</button>
      </form>
    </div>
  );
};

export default EditPolicy;
