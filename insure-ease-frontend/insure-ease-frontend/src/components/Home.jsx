import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carousel from './Carousel';

const Home = () => {
  return (
    <div>
      <div className="container mt-4">
        <div className="jumbotron text-center bg-primary text-white p-5 rounded shadow-lg">
          <h1 className="display-4">Welcome to Insurance Policy Management</h1>
          <p className="lead">Your one-stop solution for all your insurance needs.</p>
        </div>

        <Carousel />

        <div className="text-center mt-5">
          <h2 className="mb-3">Why Choose Us?</h2>
          <p className="lead">We offer the best insurance policies tailored to your needs with easy management and reliable customer support.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
