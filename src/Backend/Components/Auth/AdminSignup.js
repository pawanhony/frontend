import React, { useState } from "react";
import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { adminSignup } from "../../Api/Api";

export default function AdminSignup() {

  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    DOB:'',
    password: '',
    phone: '',
  })

  const [error,setError] = useState({
    name: '',
    email: '',
    DOB:'',
    password: '',
    phone: '',
  })

const handleChange = (e)=>{
  setForm({...form, [e.target.name]:e.target.value})
}

const handleSubmit = async (e)=>{
  e.preventDefault()
  const res = await adminSignup(form)
  console.log(res.message)
  if(res.status=="success"){
    localStorage.setItem('admin-info', JSON.stringify(res))
    toast.success(res.message)
    navigate('/')
  }
  else{
    console.log(res.message)
    toast.error(res.message)
  }

  const signupForm = form
  Object.keys(signupForm).forEach(input=>{
    if(signupForm[input]==""){
      setError((preInput)=>({...preInput, [input]:"Required Field"}))
      toast.error(res.message)
    }
  })
}

  return (
    <>
      <Container className='mt-3'>
        <form onSubmit={handleSubmit}>
          <Card className='shadow p-4'>
            <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
              <Form.Control type="text" name="name" placeholder="Name" onChange={handleChange} />
              <span>{error.name}</span>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" name="email" placeholder="name@example.com" onChange={handleChange} />
              <span>{error.email}</span>
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
              <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
              <span>{error.password}</span>
            </FloatingLabel>

            <FloatingLabel controlId="floatingMobile" label="Mobile" className="mb-3">
              <Form.Control type="number" name="phone" placeholder="Mobile" onChange={handleChange} />
              <span>{error.phone}</span>
            </FloatingLabel>

            <Button type='submit' className="mb-3">Submit</Button>
          </Card>
        </form>
        <ToastContainer

          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    </>
  )
}
