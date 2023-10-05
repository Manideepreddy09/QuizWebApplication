import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from '../login/Login.js'
import { Link } from 'react-router-dom';
import './Signup.css';
export default function Signup() {
    const [formData,setData]=useState({
        username:'',
        email:'',
        mobile:"",
        password:"",
        confirmpassword:""
    })
    //use Navigate hook
    const navigate = useNavigate();
//usestate for errors
  let [error,setError]=useState("");
//usestate for signup 
  let [signup,setSignup]=useState(false);
    const handleChange = (event) => {
        setData({ ...formData, [event.target.name]: event.target.value });
      }
    let handleSubmit=(event)=>{
        event.preventDefault();
        if(formData.password!==formData.confirmpassword)
        {
        alert("Password does match with confirm password")
        }
        else
        {
        delete formData.confirmpassword
        console.log(formData)
        }
        axios
      .post("http://localhost:2000/users-api/register-user",formData
    )
      .then(((response)=>{
          if(response.status===201)
          {
            navigate('/')
            setSignup(true)
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
    <div  className='signup' style={{height:"100vh"}}>
        <Container>
            <Row>
                <Col className='col-3'>
             
                </Col>
                <Col className='col-6 bg-dark mt-5 text-center'>

        <h4 className='text-info'>Sign Up</h4>
        {/* <p>   {!signup && (error.length!==0 && <p className='text-capitalize h3 fw-bold text-white'>{error}</p>) }</p> */}
        <form  onSubmit={handleSubmit}>
        {/*username*/}
      <div className="row  g-3 align-items-center">
          <div className="col-4">
              <label htmlFor="username" className="col-form-label text-info ">Username</label>
          </div>
          <div className="col-8">
              <input type="text" id="username"  name="username" className="form-control"  value={formData.username} onChange={handleChange} placeholder='Enter Username' required />
          </div>
      </div>
       {/*Email Id*/}
       <div className="row g-3 pt-3 align-items-center">
          <div className="col-4">
              <label htmlFor="email" className="col-form-label text-info w-4">Email Id</label>
          </div>
          <div className="col-8">
              <input type="email" id="email" name="email" className="form-control w-3"  value={formData.email} onChange={handleChange} placeholder='Enter Email Id' required />
          </div>
      </div>
        {/*Mobile Number*/}
           <div className="row  pt-3 align-items-center">
          <div className="col-4">
              <label htmlFor="mobile" className="col-form-label text-info">Mobile Number</label>
          </div>
          <div className="col-8">
              <input type="tel" id="mobile" name="mobile" className="form-control "  value={formData.mobile} onChange={handleChange} placeholder="123-4567-890" pattern='[0-9]{3}-[0-9]{4}-[0-9]{3}' required />
          </div>
      </div>
      {/*Password*/}
      <div className="row  pt-3 align-items-center">
          <div className="col-4">
              <label htmlFor="password" className="col-form-label text-info">Password</label>
          </div>
          <div className="col-8">
              <input type="password" id="password" name="password" className="form-control " minlength="8" value={formData.password} onChange={handleChange} placeholder="Enter password"  required />
          </div>
      </div>
        {/*Confirm Password*/}
      <div className="row  pt-3 align-items-center">
          <div className="col-4">
              <label htmlFor="confirmpassword" className="col-form-label text-info">Confirm Password</label>
          </div>
          <div className="col-8">
              <input type="password" id="confirmpassword" name="confirmpassword" className="form-control " minlength="8" value={formData.confirmpassword} onChange={handleChange} placeholder="Re-enter password"  required />
          </div>
      </div>
      <button className='btn btn-info mt-3 mb-3' type="submit">Sign up</button>
      </form>
      <p className='text-white'>Already have an account?{" "}<Link to="/login" style={{textDecoration: 'none'}}>Login</Link></p>
      </Col>
      </Row>
      </Container>
    </div>
  )
}
