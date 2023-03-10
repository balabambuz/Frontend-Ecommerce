import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function FormContainer({ children }) {
  //l'elemento CHILDREN viene passato attraverso le brackets
  return (
    <Container>
        <Row className='justify-content-md-center'>
           <Col xs={12} md={6}>
              { children }  
           </Col>   
        </Row>
    </Container>
  )
}

export default FormContainer