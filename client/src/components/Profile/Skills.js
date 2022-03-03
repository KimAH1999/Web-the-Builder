import React from "react"
import {Table} from 'react-bootstrap'


const Skills =() => {
return(
<Table striped bordered hover variant="dark">
  <tbody>
    <tr><td className="draggable" draggable="true"></td></tr>
    <tr><td className="draggable" draggable="true">HTML</td></tr>
    <tr><td className="draggable" draggable="true">CSS</td></tr>
    <tr><td className="draggable" draggable="true">Javascript</td></tr>
    <tr><td className="draggable" draggable="true">React</td></tr>
  </tbody>
</Table>
)
}
    
export default Skills