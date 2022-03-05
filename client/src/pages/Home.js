import React from 'react';
import {Carousel,Row,Col,Button,Jumbotron} from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

// img{
//   /* height: 45em; */
//   overflow: hidden;
//   object-fit:cover
// }
const Home = () => {
  const imgStyle={
    height: "45em",
    overflow: "hidden",
    objectFit:"cover",

  }
  return (
    <Row>
      <Col xs={12} md={8}>
        <Carousel>
          <Carousel.Item interval={900}>
            <img fluid
              className="d-block w-100"
              src="./images/html-basic.png"
              alt="HTML"
              style={imgStyle}
            />
          </Carousel.Item>
          <Carousel.Item interval={900}>
            <img fluid
              className="d-block w-100"
              src="./images/CSS.png"
              alt="CSS"
              style={imgStyle}
            />
          </Carousel.Item>
          <Carousel.Item interval={900}>
            <img fluid
              className="d-block w-100"
              src="./images/Java.jpg"
              alt="Java"
              style={imgStyle}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/OOP.png"
              alt="OOP"
              style={imgStyle}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/SQL.png"
              alt="SQL"
              style={imgStyle}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/ORM.png"
              alt="ORM"
              style={imgStyle}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/MVC.png"
              alt="MVC"
              style={imgStyle}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/CS.png"
              alt="CS"
              style={imgStyle}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/NoSQL.png"
              alt="NoSQL"
              style={imgStyle}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/PWA.png"
              alt="PWA"
              style={imgStyle}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/React.png"
              alt="CSS"
              style={imgStyle}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/MERN.png"
              alt="CSS"
              style={imgStyle}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/State.png"
              alt="State"
              style={imgStyle}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img fluid
              className="d-block w-100"
              src="./images/.png"
              alt="CSS"
              style={imgStyle}
            />
          </Carousel.Item>
        </Carousel>
      </Col>

      <Col xs={6} md={4} className="sitestory">
        <Jumbotron>
          <h1>Explore the fundamentals that goes into building a website. </h1><br></br>
          <h7>This could apply to anything from creating a single plain text webpage to developing a complex web application.</h7>
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