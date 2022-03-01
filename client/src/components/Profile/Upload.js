import React from 'react';
import "../../assets/style.css"
import {
    Row,
    Container,
    Card
  } from 'react-bootstrap'

const Upload = () => {
  return (
    <Container>
      <Row>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../logo192.png" style={{ height: '18rem' }}/>
        </Card>
      </Row>
</Container>
  );
};

export default Upload;