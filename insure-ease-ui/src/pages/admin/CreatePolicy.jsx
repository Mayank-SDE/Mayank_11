import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPolicy } from '../../redux/slices/policySlice';
import { toast } from 'react-toastify';

const CreatePolicy = () => {
  const dispatch = useDispatch();
  const [policyData, setPolicyData] = useState({
    id: Date.now(),
    name: '',
    type: '',
    premium: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPolicyData({ ...policyData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPolicy(policyData));
    toast.success("Policy created successfully!");
    setPolicyData({ id: Date.now(), name: '', type: '', premium: '', description: '' });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create New Policy</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Policy Name</label>
          <input type="text" name="name" className="form-control" value={policyData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Policy Type</label>
          <input type="text" name="type" className="form-control" value={policyData.type} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Premium Amount</label>
          <input type="number" name="premium" className="form-control" value={policyData.premium} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" value={policyData.description} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary w-100">Create Policy</button>
      </form>
    </div>
  );
};

export default CreatePolicy;
