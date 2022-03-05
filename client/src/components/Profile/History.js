<<<<<<< HEAD
import React from "react"
import {Row,Col,Container,Card} from 'react-bootstrap'

const History =() => {
    const second={
        maxwidth: "30vw"
    }
    const parent={
        maxHeight: "33vh",
        overflowX: "scroll",
        overflowY: "hidden",
        marginRight: "-15px",
        marginLeft: "-15px",
        display: "flex",
        color: "1d2679",
    }
    

return(
<Container>
    <Row>
        <h2>Video History</h2>
    </Row>
    <Container style={second}>
       <div style={parent}>

            <Col>
                <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8">
                    <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src="../../logo512.png" style={{ height: '10rem' }}/>
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                    </Card>
                </a>
            </Col>
            
        </div>
    </Container>
</Container>
)
}
    
export default History
=======
import React from "react"
import {Row,Col,Container,Card} from 'react-bootstrap'

const History =() => {
    const second={
        maxwidth: "30vw"
    }
    const parent={
        maxHeight: "33vh",
        overflowX: "scroll",
        overflowY: "hidden",
        marginRight: "-15px",
        marginLeft: "-15px",
        display: "flex",
        color: "1d2679",
    }
    

return(
<Container>
    <Row>
        <h2>Video History</h2>
    </Row>
    <Container style={second}>
       <div style={parent}>

            <Col>
                <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8">
                    <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src="../../logo512.png" style={{ height: '10rem' }}/>
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                    </Card>
                </a>
            </Col>
            
        </div>
    </Container>
</Container>
)
}
    
export default History;
>>>>>>> f239d2469acf2e3e40d3e5d683b889a3ae6413bb
