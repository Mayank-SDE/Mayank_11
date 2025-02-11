import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, purchasePolicies } from '../../redux/slices/policySlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.policy.cart);

  const handleRemove = (policyId) => {
    dispatch(removeFromCart(policyId));
    toast.info("Policy removed from cart.");
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warn("Your cart is empty.");
      return;
    }
    dispatch(purchasePolicies());
    toast.success("Purchase successful!");
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h2 className="text-center mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="list-group">
          {cart.map((policy) => (
            <div className="list-group-item d-flex justify-content-between align-items-center" key={policy.id}>
              <div>
                <h5>{policy.name}</h5>
                <p className="mb-1">{policy.description}</p>
                <p className="fw-bold mb-0">Premium: ${policy.premium}/month</p>
              </div>
              <button className="btn btn-danger" onClick={() => handleRemove(policy.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <button 
        className="btn btn-success w-100 mt-4"
        onClick={handleCheckout}
        disabled={cart.length === 0}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
