import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Result.css'
import Instructions from '../Instructions/Instructions';
function Result({marks,totalQuestions}) {
   // Calculate the percentage score
  
   const percentageScore = (marks / totalQuestions) * 100;
  // let handleClick=()=>{
  //     setFlag(true);
  // }
   let message = '';
 
   // Define different messages based on the percentage score
   if (percentageScore >= 80) {
     message = 'Congratulations! You did an excellent job!';
   } else if (percentageScore >= 60) {
     message = 'Good job! You passed the quiz.';
   } else {
     message = 'You can do better. Keep learning!!!';
   }
  return (
   
    <div className='result' style={{height:"100vh"}} >
       {/* <div>
    {flag && <Instructions/>}
    </div> */}
      <Container className=' text-center '>
        <Row>
          <Col className='bg-dark text-info  mx-auto col-6 mt-5' >
        <h3>Quiz Results</h3>
        <p className='text-white'>Your Score: {marks} out of {totalQuestions}</p>
        <p className='text-info'>{message}</p>
        {/* <Link to="/instructions" >Retake quiz</Link><br/> */}
        {/* <Button className='btn mr-3' >Home</Button><br/>
        <p>{" "}</p> */}
       <Button className='btn mb-5 '><Link to="/" className='text-white' style={{textDecoration: 'none'}}>Logout</Link><br/></Button>
        </Col>
        </Row>
        </Container>
    </div>
  )
}
export default  Result