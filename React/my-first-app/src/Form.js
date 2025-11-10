import React from 'react';
import { Navbar, Nav, Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import first from './assets/picture2.jpg'
import second from './assets/EC2.jpg'
import third from'./assets/EC3.jpg'
function App() {
  return (
    <div>
       {/* Navbar */}
       <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Website</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>   
                 <img
            className="d-block w-100"
            src={first}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Description for first slide.</p>
          </Carousel.Caption>
       </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={second}
            alt="Second slide"
          />
         <Carousel.Caption>
           <h3>Second Slide</h3>
            <p>Description for second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
         <img
            className="d-block w-100"
            src="third"
            alt="Third slide"
          />
          <Carousel.Caption>
           <h3>Third Slide</h3>
             <p>Description for third slide.</p>
         </Carousel.Caption>
         </Carousel.Item>
       </Carousel>

{/* //       Cards Section */}
      {/* <Container className="my-5">         <Row>
          {[1, 2, 3].map((item) => (
            <Col md={4} key={item}>
              <Card className="mb-4">
                <Card.Img variant="top" src={`https://via.placeholder.com/300x200?text=Card+${item}`} />
                <Card.Body>
                  <Card.Title>Card {item}}</Card.Title>
                   <Card.Text>
                     This is a description for card {item}. You can put anything here.
                 </Card.Text>
                </Card.Body>              </Card>
            </Col>
          ))}
        </Row>
      </Container> */}

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-4">
        <Container>
          <p className="mb-0">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
