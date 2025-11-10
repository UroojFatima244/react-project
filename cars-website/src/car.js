import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from'./ASSETS/car4.jpg'
import CAR2 from './ASSETS/CAR2.jpg'
import CAR3 from './ASSETS/CAR3.jpg'

import React from 'react';
import { Row, Col } from 'react-bootstrap';
const CardRow = () => {
  return (
    <>
    <h1>Vehicals</h1>
    <Row className="justify-content-center">
      <Col xs={12} md={4} className="mb-4">
        <Card style={{ width: '100%',margin:40 }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={4} className="mb-4">
        <Card style={{ width: '100%',margin:40 }}>
          <Card.Img variant="top" src={CAR2} />
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={10} md={4} className="mb-4">
        <Card style={{ width: '100%',margin:40 }}>
          <Card.Img variant="top" src={CAR3} />
          <Card.Body>
            <Card.Title>Card Title 3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  );
};

export default CardRow;
