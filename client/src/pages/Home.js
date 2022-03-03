import React from 'react';
import {Carousel,Row,Col,Button,Jumbotron} from 'react-bootstrap'
import cssLogo from "../assets/image/CSS.jpg"
import htmlLogo from "../assets/image/HTML.jpg"
import javascriptLogo from "../assets/image/Javascript.png"
import { useHistory } from 'react-router-dom';

const Home = () => {
  let history= useHistory()
  const goto = () =>{
    history.push("/products")
  }
  const imageStyle={
    backgroundSize:"contain"
  }
  const jumboStyle={
    textAlign:"center",
    backgroundColor:"rgba(238, 255, 0, 0.76)"
  }
  const txtStyle={
    textAlign:"center",
    backgroundColor:"rgba(238, 255, 0, 0.76)"
  }
  return (
  

<Row>
<Col>
  <Carousel>
    <Carousel.Item interval={500}>
      <img fluid
        onClick={()=> window.open("https://www.youtube.com/playlist?list=PL6VsrHTw_Ntf7oni6QcOh8iGXS0Bxwoef","_blank")}
        className="d-block w-100"
        src={htmlLogo}
        alt="Learn HTML"
        style={imageStyle}
      />
    </Carousel.Item>

    <Carousel.Item interval={500}>
      <img fluid
        onClick={()=> window.open("https://www.youtube.com/playlist?list=PL6VsrHTw_NtdO2OnEdrZKRYD1xzxvy8U_","_blank")}
        className="d-block w-100"
        src={cssLogo}
        alt="Learn CSS"
        style={imageStyle}
      />
    </Carousel.Item>

    <Carousel.Item interval={500}>
      <img fluid
        onClick={()=> window.open("https://www.youtube.com/playlist?list=PL6VsrHTw_NtfZpAZHtHdHP1Ol6m72ePS4","_blank")}
        className="d-block w-100"
        src={javascriptLogo}
        alt="Learn Javascript"
        style={imageStyle}
      />
    </Carousel.Item>
  </Carousel>
</Col>

<Col>
      <Jumbotron style={jumboStyle}>
        <h1>Learn how to Code</h1>
      </Jumbotron>

      <Jumbotron style={txtStyle}>
        <p>Explore the fundamentals that goes into building a website.
          This could apply to anything from creating a single plain text webpage
          to developing a complex web application.</p>
      </Jumbotron>
      

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={goto}>
          Learn how to Code!
        </Button>
      </div>
</Col>
</Row>

  );
};

export default Home;