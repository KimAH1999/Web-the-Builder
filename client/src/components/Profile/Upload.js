<<<<<<< HEAD
import React from "react"
import {Row,Container,Card} from 'react-bootstrap'
import blankprofile from "../../assets/blankprofile.png"


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
          <img ref={uploadImage} variant="top" src={blankprofile} alt="" style={{ height: '18rem' }} />
          <input ref={imageUploader} type="file" accept="image" multiple={false} onChange={handleImageUpload} style={{display: "none"}}/>
        </Card>
      </Row>
    </Container>

  );
}


export default Upload;
=======
import React from "react"
import {Row,Container,Card} from 'react-bootstrap'
import blankprofile from "../../assets/blankprofile.png"


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
          <img ref={uploadImage} variant="top" src={blankprofile} alt="" style={{ height: '18rem' }} />
          <input ref={imageUploader} type="file" accept="image" multiple={false} onChange={handleImageUpload} style={{display: "none"}}/>
        </Card>
      </Row>
    </Container>

  );
}


export default Upload;
>>>>>>> f239d2469acf2e3e40d3e5d683b889a3ae6413bb
