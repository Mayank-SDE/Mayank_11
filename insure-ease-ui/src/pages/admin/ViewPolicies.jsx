import { useSelector, useDispatch } from 'react-redux';
import { deletePolicy } from '../../redux/slices/policySlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ViewPolicies = () => {
  const policies = useSelector(state => state.policy.policies);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePolicy(id));
    toast.success("Policy deleted successfully!");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">All Policies</h2>
      {policies.length === 0 ? (
        <p className="text-center">No policies available. <Link to="/create-policy">Add one?</Link></p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Premium</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {policies.map(policy => (
              <tr key={policy.id}>
                <td>{policy.name}</td>
                <td>{policy.type}</td>
                <td>${policy.premium}</td>
                <td>
                  <Link to={`/edit-policy/${policy.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(policy.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewPolicies;
