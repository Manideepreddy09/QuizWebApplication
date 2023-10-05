import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import quizimg from '../images/quizimg.jpg'
import  instruction1 from '../images/instruction1.png'
import  instruction2 from '../images/instruction2.png'
import login from '../images/login.png'
import signup from '../images/signup.png'
import upcoming from '../images/upcomingquiz.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function home() {
  return (
    <div>
<Container style={{height:"80vh"}}>
    <Row>
        <Col className='col-10 offset-1'>
        <Carousel fade className="mt-3"data-bs-theme="white" >
      <Carousel.Item interval={2000}>
        <img
          className="d-block "
          src={quizimg}
          style={{height:"70vh"}} alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={instruction1}
          style={{height:"70vh"}}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={instruction2}
          style={{height:"70vh"}}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={upcoming}
          style={{height:"70vh"}}
          alt="Foruth slide"
        />
        <Carousel.Caption>
          <h5 className='text-dark'>
          Upcoming Quiz on SQL and PYTHON
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
    </Row>
</Container>
        
    </div>
  )
}
