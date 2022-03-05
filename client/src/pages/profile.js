import React from 'react';
import Comment from '../components/Profile/Comment';
import Upload from '../components/Profile/Upload';
import Skills from '../components/Profile/Skills';
import {Row, Col,Container} from 'react-bootstrap';
import Cart from "../components/Cart";



const Profile =() => {

return(
    <div>

    <Container>
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

  </div>
)
}

export default Profile;