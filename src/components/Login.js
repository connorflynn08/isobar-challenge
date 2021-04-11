import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';


const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState([''])
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(loggedIn)

    if (loggedIn === true){
        return (
            <div>
                <h1>LOGGED IN</h1>
            </div>
        )
    }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add this course
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please log in to add this course to your cart</Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}   />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" value={loggedIn} onClick={function(event){ handleClose(event); setLoggedIn(true);}}>
                Submit
            </Button>
            </Form>
        </Modal>
      </>
    );
  }


export default Login
