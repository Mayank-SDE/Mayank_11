import healthImg from '../assets/images/health.png';
import carImg from '../assets/images/car.png';
import lifeImg from '../assets/images/life.png';
import houseImg from '../assets/images/house.png';

const Carousel = () => {
  return (
    <div id="insuranceCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#insuranceCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#insuranceCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#insuranceCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#insuranceCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>

      <div className="carousel-inner">
        {[{ img: healthImg, title: 'Health Insurance', desc: 'Comprehensive health coverage to keep you and your family safe.' },
          { img: lifeImg, title: 'Life Insurance', desc: 'Secure your loved ones\' future with our trusted life insurance plans.' },
          { img: carImg, title: 'Car Insurance', desc: 'Drive with confidence knowing you\'re covered with the best car insurance.' },
          { img: houseImg, title: 'Property Insurance', desc: 'Protect your valuable assets with our comprehensive property insurance.' }]
          .map((item, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={item.img} className="d-block w-100 rounded" alt={item.title} style={{ maxHeight: '400px', objectFit: 'cover' }} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded shadow">
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))
        }
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#insuranceCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#insuranceCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
