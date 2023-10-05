import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import quizicon from "../images/quizicon.jpg"
import './Navbar.css'
export default function() {
  return (
    <div>
     <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
      
        <Navbar.Brand > <img  class="img" src={quizicon} style={{width:"3rem"}}/>{"  "}Quizmaster</Navbar.Brand>
          <Nav className="mr-auto ">
            <Nav.Link href="/login"><h6>Login</h6></Nav.Link>
            <Nav.Link href="/signup"><h6>Sign Up</h6></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
