import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/policySlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BuyPolicies = () => {
  const dispatch = useDispatch();
  const policies = useSelector((state) => state.policy.availablePolicies);
  const cart = useSelector((state) => state.policy.cart);

  const handleAddToCart = (policyId) => {
    if (cart.some(item => item.id === policyId)) {
      toast.info("Policy is already in the cart.");
    } else {
      dispatch(addToCart(policyId));
      toast.success("Policy added to cart!");
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h2 className="text-center mb-4">Available Policies</h2>
      <div className="row">
        {policies.map((policy) => (
          <div className="col-md-4 mb-4" key={policy.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{policy.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{policy.category}</h6>
                <p className="card-text">{policy.description}</p>
                <p className="fw-bold">Premium: ${policy.premium}/month</p>
                <button 
                  className="btn btn-primary w-100" 
                  onClick={() => handleAddToCart(policy.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyPolicies;
