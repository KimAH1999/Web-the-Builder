import "../../assets/style.css"
import React, {Component} from "react"
import {
  Row,
  Container,
  Card
} from 'react-bootstrap'


class Upload extends Component{
  state ={
    selectedFile:null
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target
    })
  }

  FileUploadHandler =()=>{
    const fd = new FormData
    fd.append("image",this.state.selectedFile, this.state.selectedFile.name)
  }

  render(){
  return (
    <><Container>
      <Row>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../logo192.png" style={{ height: '18rem' }} />
        </Card>
      </Row>
    </Container>
    <div className="App">
      <input style={{display: "none"}}type="file" onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput}/>
      <button onClick={() => this.fileInput.click(),this.fileSelectedHandler}>Upload</button>
      <button onClick={this.FileUploadHandler}>Save</button>
    </div></>
  );
}
}

export default Upload;
