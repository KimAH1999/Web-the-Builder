import React from "react"
import {Form} from 'react-bootstrap'


const Skills =() => {
const inputStyle= {
  margin: "20px",
  width: "40vw",
  padding:"1rem",
  border:"solid",
}
const headerStyle= {
  padding:"1rem",
  justifyContent:"center",
}


  return(
<Form style={inputStyle}>
  <h3 style={headerStyle}>My Top Skills</h3>
  <Form.Group controlId="userSkill1">
    <Form.Control type="name" placeholder="HTML" />
  </Form.Group>
  <Form.Group controlId="userSkill2">
    <Form.Control type="name" placeholder="CSS" />
  </Form.Group>
  <Form.Group controlId="userSkill3">
    <Form.Control type="name" placeholder="Javsscript" />
  </Form.Group>
  <Form.Group controlId="userSkill4">
    <Form.Control type="name" placeholder="React" />
  </Form.Group>
</Form>
)
}
    
export default Skills;