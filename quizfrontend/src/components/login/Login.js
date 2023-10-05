import React from 'react'
import '../login/Login.css'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import {useNavigate} from 'react-router-dom'
// import Quiz from '../quiz/Quiz.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import quizimg from '../images/quizimg.jpg'
import { useNavigate } from 'react-router-dom';
import Instructions from '../Instructions/Instructions';
import './Login.css';
function Login({flag}) {
  //use State to read form data
  console.log(flag)
  const [formData, setFormData] = useState({
    email:'',
    password:''
  });
     //use Navigate hook
     const navigate = useNavigate();
//login use state hook
  const [loggedin,setLogin]=useState(false)
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  //usestate for errors
  let [error,setError]=useState("");
    //usestate for  data
    // let [data,setData]=useState([]);
    //navigate hook
    //let navigate=useNavigate();
  //to send request to backend
  let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(formData)
      axios
      .post("http://localhost:2000/users-api/login-user",formData
    )
      .then(((response)=>{
          if(response.status===201)
          {
            setLogin(true)
            flag(true);
            navigate('/instructions')
          }
          else
          {
            setError(response.data.message)
            alert(error)
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

        alert(error)
      })
     
    }
  return (
    <div  class="login"style = {{height:"100vh"}} >
    <Container >
      <Row style = {{height:"30rem"}} >
    <Col className='mt-5   col-6 offset-3 text-center bg-dark' style={{height:"25rem"}} >
      <div className='text-info '><h3>Login </h3></div>
    <div className=' pd-t-5 '>
    {/* {loggedin===false && (  error.length!==0 && <p className='text-capitalize h3 fw-bold text-danger'>{error}</p>)} */}
        <div > 

      <form  onSubmit={handleSubmit}>
    
       {/*Email Id*/}
       <div className="row g-3 pt-3 align-items-center">
          <div className="col-4">
              <label htmlFor="email" className="col-form-label text-info w-4">Email Id</label>
          </div>
          <div className="col-8">
              <input type="email" id="email" name="email" className="form-control w-3"  value={formData.email} onChange={handleChange} placeholder='Enter Email Id' required />
          </div>
      </div>
        
      {/*Password*/}
      <div className="row  pt-3 align-items-center">
          <div className="col-4">
              <label htmlFor="password" className="text-info col-form-label">Password</label>
          </div>
          <div className="col-8">
              <input type="password" id="password" name="password" className="form-control "  value={formData.password} onChange={handleChange} placeholder="Enter password"  required />
          </div>
      </div>
      <button  className="btn btn-info mt-4" type="submit">Login</button>
        </form>
        </div>
        <div>
        <p className='text-white'> <Link to="/resetpassword" style={{textDecoration: 'none'}}>Forget password?</Link></p>
        </div>
        <div>
          <p className='text-white'>Don't have an account? <Link to="/signup" style={{textDecoration: 'none'}}>Signup</Link></p>
        </div>
        
 
   </div>
   </Col>
   </Row>
   </Container>
   </div>
  )}
export default Login
