import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export default function Header() {
  return (
    <>
         <Container fluid="md">
            <Row className='justify-content-md-center mt-5'>
                <Col xs={6}>
                     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name </Form.Label>
        <Form.Control type="name" placeholder="Name " />      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary"style={{width: "100%"}} type="submit">
        Submit
      </Button>
                     </Form>
                </Col>
            </Row>
         </Container>

    </>
  )
}
