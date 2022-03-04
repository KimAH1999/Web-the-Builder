import React from 'react';
import Cart from "../components/Cart";
import {
  Carousel,
  Row,
  Col,
  Button,
  Jumbotron
} from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"


const Home = () => {

  return (
    <Row>
      <Col xs={12} md={8}>
        <Carousel>
          <Carousel.Item interval={900}>
            <img fluid
              className="d-block w-100"
              src="./images/html-basic.png"
              alt="HTML"
            />
          </Carousel.Item>
          <Carousel.Item interval={900}>
            <img fluid
              className="d-block w-100"
              src="./images/CSS.png"
              alt="CSS"
            />
          </Carousel.Item>
          <Carousel.Item interval={900}>
            <img fluid
              className="d-block w-100"
              src="./images/Java.png"
              alt="Java"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/OOP.png"
              alt="OOP"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/SQL.png"
              alt="SQL"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/ORM.png"
              alt="ORM"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/MVC.png"
              alt="MVC"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/CS.png"
              alt="CS"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/NoSQL.png"
              alt="NoSQL"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/PWA.png"
              alt="PWA"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/React.png"
              alt="CSS"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/MERN.png"
              alt="CSS"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/State.png"
              alt="State"
            />
          </Carousel.Item>
        </Carousel>
        <Cart />
      </Col>

      <Col xs={6} md={4} className="sitestory">
        <Jumbotron>
          <h1>Explore the fundamentals that goes into building a website. </h1><br></br>
          <h7>This could apply to anything from creating a single plain text webpage
                  to developing a complex web application.</h7>
        </Jumbotron>

        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Build a website!
          </Button>
        </div>
      </Col>
    </Row>

  );
};

export default Home;
