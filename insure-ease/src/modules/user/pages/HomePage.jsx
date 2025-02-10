// src/pages/HomePage.jsx
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import healthImg from '../../../assets/images/health.png';
import lifeImg from '../../../assets/images/life.png';
import carImg from '../../../assets/images/car.png';
import houseImg from '../../../assets/images/house.png';

const HomePage = () => {
  return (
    <Container className="mt-4">
      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={healthImg} alt="Health Insurance" />
          <Carousel.Caption>
            <h3>Health Insurance</h3>
            <p>Comprehensive health coverage for you and your family.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={lifeImg} alt="Life Insurance" />
          <Carousel.Caption>
            <h3>Life Insurance</h3>
            <p>Secure your family’s future with our life insurance plans.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carImg} alt="Car Insurance" />
          <Carousel.Caption>
            <h3>Car Insurance</h3>
            <p>Protect your vehicle with our comprehensive car insurance.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={houseImg} alt="House Insurance" />
          <Carousel.Caption>
            <h3>House Insurance</h3>
            <p>Safeguard your home against unexpected events.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Available Policies Section */}
      <h2 className="mt-5 text-center">Available Insurance Policies</h2>
      <Row className="mt-4">
        {[
          { title: 'Health Insurance A', description: 'Affordable health coverage.', provider: 'Company A' },
          { title: 'Life Insurance B', description: 'Secure life plans.', provider: 'Company B' },
          { title: 'Car Insurance C', description: 'Protect your car.', provider: 'Company C' },
          { title: 'House Insurance D', description: 'Home protection plans.', provider: 'Company D' }
        ].map((policy, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{policy.title}</Card.Title>
                <Card.Text>{policy.description}</Card.Text>
                <Card.Footer>
                  <small className="text-muted">Provided by: {policy.provider}</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
