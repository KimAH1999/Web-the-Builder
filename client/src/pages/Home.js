import React from 'react';
import {Carousel,Row,Col,Button} from 'react-bootstrap'


const Home = () => {

  return (

<Row>
<Col>
  <Carousel>
    <Carousel.Item interval={500}>
      <img fluid
        className="d-block w-100"
        src="https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA="
        alt="First slide"
      />
    </Carousel.Item>

    <Carousel.Item interval={500}>
      <img fluid
        className="d-block w-100"
        src="https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP.jpg"
        alt="Second slide"
      />
    </Carousel.Item>

    <Carousel.Item interval={500}>
      <img fluid
        className="d-block w-100"
        src="https://www.littlepotatoes.com/drive/uploads/2018/07/Nutritional-Difference-of-Potatoes-1180x560.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
</Col>

<Col>
      <div>
        <h1>THIS IS THE HOMEPAGE</h1>
      </div>
      

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