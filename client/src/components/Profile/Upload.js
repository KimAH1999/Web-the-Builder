import React from "react"
import {Container,Card} from 'react-bootstrap'
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
  const uploadStyle ={
    width: '19rem',
    height:'19rem',
    border: '10px solid rgba(10, 0, 0, 0.05)',
  }
  const imageStyles ={
    height: '18rem',
    width:'17.75rem',
    objectFit:"cover",
  }
  const containerStyles ={
    justifyContent: 'space-between',
    width:"100%",
    height:"100%"
  }
  return (
    <Container>
      <div style={uploadStyle}>
        <Card onClick={(()=> imageUploader.current.click())} style={containerStyles}>
          <img ref={uploadImage} variant="top" src={blankprofile} alt="" style={imageStyles} />
          <input ref={imageUploader} type="file" accept="image" multiple={false} onChange={handleImageUpload} style={{display: "none"}}/>
        </Card>
      </div>
    </Container>

  );
}


export default Upload;