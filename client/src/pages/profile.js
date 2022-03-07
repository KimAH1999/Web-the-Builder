import React from 'react';
import Comment from '../components/Profile/Comment';
import Upload from '../components/Profile/Upload';
import Skills from '../components/Profile/Skills';
import {Row, Col,Container,Jumbotron} from 'react-bootstrap';
import Cart from "../components/Cart";
import "../index.css"

const Profile =() => {
return(
    <Jumbotron>
    <Container fluid>
    <div><h1>Welcome, to your profile page!</h1></div>
      <Row>
        <Col>
          <Upload />
        </Col>
        <Col>
          <Skills />
        </Col>
      </Row>
      <Row>
        <Col>
          <Comment />
        </Col>
      </Row>
    </Container>
    <Cart />

  </Jumbotron>
)
}

export default Profile;