import React from 'react';
import Comment from '../components/Profile/Comment';
import History from '../components/Profile/History';
import Upload from '../components/Profile/Upload';
import Skills from '../components/Profile/Skills';
import {
  Row, 
  Col,
  Container
} from 'react-bootstrap';



const Profile =() => {
return(
    <div class="container container-fluid">

    <Container>
      <Row>
        <Col>
          <Upload />
        </Col>
        <Col>
          <History />
        </Col>
      </Row>
      <Row>
        <Col>
          <Skills />
        </Col>
        <Col>
          <Comment />
        </Col>
      </Row>
    </Container>

  </div>
)
}

export default Profile;
