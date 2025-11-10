import Carousel from 'react-bootstrap/Carousel';
import first from './assets/E commerce 1.jpg'
import second from'./assets/EC2.jpg'
import third from'./assets/EC3.jpg'
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={first}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>first slide label</h5>
          <p>Ecommerce</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="second"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Ecommerce</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="third"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
          Ecommerce
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;