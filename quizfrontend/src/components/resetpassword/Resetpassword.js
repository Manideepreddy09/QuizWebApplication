import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
export default function Resetpassword() {
    const [reset,setReset]=useState(false)
      //usestate for errors
  let [error,setError]=useState("");
    const [formData,setFormData]=useState({
        email:"",
        password:"",
        verifypassword:""
    })
    let handleClose=()=>{
        setReset(false)
    }
    let handleChange=(event)=>{
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData)
        if(formData.password!==formData.verifypassword)
        {
        alert("Password does match with confirm password")
        }
        else
        {
        delete formData.verifypassword
        console.log(formData)
  
        axios.post("http://localhost:2000/users-api/resetpassword",formData)
        .then((response)=>{
            if(response.status===201)
            {
                setReset(true);
            }
            else
            {
                setError(response.data.message)
                alert(error)
            }
        }).catch((err)=>{
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
        console.log(reset)
      }
    }
  return (
    <div>
        {reset && (
                  <Modal show={reset} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body><h4 className='text-success'>Successfully changed the password</h4></Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Link to="/login">  <Button  variant="primary">
                  Login
                    </Button></Link>
                  </Modal.Footer>
                </Modal>
        )}
        <Container >
      <Row style = {{height:"20rem"}} >
    <Col className='mt-5   col-6 offset-3 text-center bg-dark' style={{height:"25rem"}} >
    <form  onSubmit={handleSubmit}>
    {/*Email Id*/}
    <div className="row g-3 pt-5 align-items-center">
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
           <label htmlFor="password" className="text-info col-form-label">New Password</label>
       </div>
       <div className="col-8">
           <input type="password" id="password" name="password" className="form-control "  value={formData.password} onChange={handleChange} placeholder="Enter password"  required />
       </div>
   </div>
      {/* verify Password*/}
      <div className="row  pt-3 align-items-center">
       <div className="col-4">
           <label htmlFor="verifypassword" className="text-info col-form-label">Verify Password</label>
       </div>
       <div className="col-8">
           <input type="password" id="verifypassword" name="verifypassword" className="form-control "  value={formData.verifypassword} onChange={handleChange} placeholder="Enter password"  required />
       </div>
            </div>
   <button  class="btn btn-info mt-4" type="submit">Reset</button>
     </form>
     </Col>
     </Row>
     </Container>
    </div>
  )
}
