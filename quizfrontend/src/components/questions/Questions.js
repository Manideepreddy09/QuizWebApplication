import React from 'react';
import {useState} from 'react';
import './Questions.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Result from '../result/Result';
export default function Questions({questions}) {
  //quiz questions 
  const data=questions[1]
  //type of quiz java or cpp
  questions=questions[0]
 //state to check submitted or not
  const [subans,setSubans]=useState(false);
  //state for total marks
  const [score,setScore]=useState(0)
  //quiz correct answers
  const cppanswers=["0","3","1","1","1","2","1","0","2","3"]
  const javaanswers=["2","3","3","1","3","1","3","2","1","2"]
  
  //state for question no
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  //state to get users answers
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const nextOrSubmit = () => {
    if (currentQuestionIndex === questions.length - 1) {
       //marks
        let marks=0;
      //If it's the last question, submit the answers
      let correctans=[];
      if(data==="java")
      correctans=javaanswers;
    else
    correctans=cppanswers;
      for(let i=0;i<questions.length;i++)
      {
        if(userAnswers[i]==correctans[i])
        marks++;
      }
      setScore(marks);
      setSubans(true);
    } else {
      // Otherwise, go to the next question
      next();
    }
  };

  const next= () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const handleOptionChange = (event) => {
    const newAnswer = event.target.id;
    console.log(event.target.id)
    setSelectedOption(newAnswer);
    const updatedUserAnswers = [...userAnswers];
    if(userAnswers[currentQuestionIndex]!==newAnswer)
    {
    updatedUserAnswers[currentQuestionIndex] = newAnswer;
    setUserAnswers(updatedUserAnswers);
    }
  };
console.log(userAnswers);
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div>
      {subans && <Result marks={score} totalQuestions={questions.length} />}
         { !subans &&<Container className='mt-5'>
            <Row>
              <Col className=' col-6 offset-3  bg-dark mt-5'>
                <div className='text-white '>
              <h2 >Question {currentQuestionIndex+1}</h2>
              <p>{currentQuestion.question}</p>
              </div>
              <form className=''>
            {currentQuestion.options.map((option, index) => (
              <div>
                <input 
                id={index}
                  type="radio"
                  className='radio'
                  value={option}
                  name="answer"
                  checked={selectedOption === option}
                    onChange={handleOptionChange}
                />
              <label key={index} className='text-white pt-3'>
                {'   '}{option}
              </label>
              </div>        
            ))}
          </form>

          <Col className='col-3 offset-10'>
        <button  className="btn btn-success mt-2  mb-2" onClick={nextOrSubmit}>
          {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
        </Col>
        </Col>
        </Row>
        </Container>}
        </div>
  )
}
