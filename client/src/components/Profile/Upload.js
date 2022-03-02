import "../../assets/style.css"
import React from "react"
import {Row,Container,Card} from 'react-bootstrap'


const Upload = () => {
  const uploadImage = React.useRef(null)
  const imageUploader = React.useRef(null)

  const handleImageUpload = e =>{
    const [file] = e.target.files
    if (file) {
      const reader = new FileReader()
      const {current} = uploadImage
      current.file= file
      reader.onload=(e)=>{
        current.src= e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Container>
      <Row>
        <Card style={{ width: '18rem' }} onClick={(()=> imageUploader.current.click())}>
          <img ref={uploadImage} variant="top" src="../logo192.png" alt="profile picture" style={{ height: '18rem' }} />
          <input ref={imageUploader} type="file" accept="image" multiple={false} onChange={handleImageUpload} style={{display: "none"}}/>
        </Card>
      </Row>
    </Container>

  );
}


export default Upload;
