import React from 'react'
import {Aler, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'


export default function Header() {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  let obj = {
    name: name,
    age: age
  }

  const postdata = (e) => {
    // e.prevenDefault()
    axios.post("http://localhost:3000/data", obj)
    .then(res => {
      if (res.status === 201){
        alert(res.statusText);
        setAge("")
        setName("")
      }
    })

  }
  return (
    <>
      <Container fluid="md">
        <Row className='justify-content-md-center mt-5'>
          <Col xs={6}>
            <Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name </Form.Label>
                <Form.Control type="name" placeholder="Name " onChange={(e) => setName(e.target.value)} value={name}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Age" onChange={(e) => setAge(e.target.value)} value={age} />
              </Form.Group>

              <Button onClick={postdata} variant="primary" style={{ width: "100%" }} type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </>
  )
}
