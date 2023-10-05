import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Questions from '../questions/Questions';
import axios  from 'axios';
export default function Instructions() {
    const [quizdata,setQuizdata]=useState({
        quiz:""
    })
    //login use state hook
  const [loggedin,setLogin]=useState(false)
    const [quesdata,setQuesdata]=useState([])
    const [typedata,setType]=useState("")
    const handleChange = (event) => {
        setQuizdata({ ...quizdata, [event.target.name]: event.target.value });
      }
      //usestate for errors
      let [error,setError]=useState("");
      //to send request to backend
      let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(quizdata)
          axios
          .post("http://localhost:2000",quizdata
        )
          .then(((response)=>{
              if(response.status===201)
              {
                console.log(response.data.payload.data)
                setLogin(true)
                setQuesdata(response.data.payload.data)
                setType(response.data.message)
              }
              else
              {
                setError(response.data.message)
                alert(response.data.message)
              }
          }))
          .catch((err)=>{
            if(err.response)
            {
              setError(err.message)
            }
            else if(err.request)
            {
              setError(err.message)
            }
            else
            {
              setError(err.message)
            }
            alert(err.message)
    
          })
        }
  return (
    <div>
     {loggedin && <Questions questions={[quesdata,typedata]}/>}
       {!loggedin &&  
       <Container>
            <Row>
                <Col  className='bg-dark text-white col-8 mx-auto'>
    <h2 >Welcome to the Quiz!</h2>
    <p>Choose your preferred quiz: Java or C++.</p>
    <h3>Quiz Rules:</h3>
    <ul>
        <li>Each quiz has 10 multiple-choice questions.</li>
        <li>Once you select an answer, you cannot change it.</li>
        <li>Your score will be displayed at the end of the quiz.</li>
    </ul>
    
    <h3>How to Play:</h3>
    <ol >
        <li>Read each question carefully.</li>
        <li>Choose the answer you think is correct (A, B, C, or D).</li>
        <li>Click on your chosen answer.</li>
        <li>Use the "Next" button to proceed to the next question.</li>
        <li>You cannot go back to previous questions once answered.</li>
    </ol>
    
    <h3>Scoring:</h3>
    <p>Your score will be calculated automatically. You'll see your final score at the end of the quiz.</p>
    
    <h3>Quiz Completion:</h3>
    <p>After answering all 10 questions, you can choose to restart the same quiz or try the other quiz (Java or C++).</p>

    {/* {!loggedin && (error.length!==0 && <p className='text-capitalize h3 fw-bold text-danger'>{error}</p> )} */}
    <form onSubmit={handleSubmit} className='text-center'>
        <h4>Its Time to Start the QUIZ</h4>
        <div >
        <label htmlFor="quiz">Choose Quiz topic</label><br/>
        <select name="quiz" id="quiz" value={quizdata.quiz} onChange={handleChange} required >
            <option value="">--Please choose an option--</option>
            <option value="JAVA">JAVA</option>
            <option value="CPP">CPP</option>
        </select>
        </div>
        <button className='btn btn-success mt-4' type="submit">Start</button>
    </form>
    </Col>
    </Row>
    </Container>}
    </div>

  )
}
