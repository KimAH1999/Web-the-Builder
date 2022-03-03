import React from 'react';
import Comment from '../components/Profile/Comment';
// import History from '../components/Profile/History';
import Upload from '../components/Profile/Upload';
import Skills from '../components/Profile/Skills';
import {
  Row, 
  Col,
  Container
} from 'react-bootstrap';



const Profile =() => {
const containerstyles={
  width:"100%"
}

return(
    <div>

    <Container fluid>
      <Row>
        <Col>
          <Upload />
        </Col>
        <Col>
          <Comment />
        </Col>
        <Col>
          <Skills />
        </Col>
      </Row>
    </Container>

  </div>
)
}

export default Profile;
