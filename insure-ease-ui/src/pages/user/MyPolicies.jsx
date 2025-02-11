import { useSelector } from 'react-redux';

const MyPolicies = () => {
  const purchasedPolicies = useSelector((state) => state.policy.purchasedPolicies);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Policies</h2>
      {purchasedPolicies.length === 0 ? (
        <p className="text-center">You have not purchased any policies yet.</p>
      ) : (
        <div className="list-group">
          {purchasedPolicies.map((policy) => (
            <div className="list-group-item" key={policy.id}>
              <h5>{policy.name}</h5>
              <p>{policy.description}</p>
              <p className="fw-bold">Premium: ${policy.premium}/month</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPolicies;
