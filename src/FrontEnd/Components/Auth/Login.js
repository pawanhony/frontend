import React, { useContext, useEffect, useState } from "react";
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import { loginApi } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../../Context/Context";
import { setStorage } from "../../Constant/Storage";

export default function Login() {

  const {login} = useContext(AccountContext)
  const navigate = useNavigate()
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  })

  const [error, setError] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setSignin({ ...signin, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const respo = await loginApi(signin)
    console.log(respo)
    if (respo.status == "success") {
      localStorage.setItem('login-info', JSON.stringify(respo))
      toast.success(respo.message)
      setStorage(respo.data)
      login(respo)
      navigate('/')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('login-info')) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <Container className='login-container mt-4 '>
        <Card className='login-card shadow'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
              <span>{error.email}</span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
              <span>{error.password}</span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Login
            </Button>
          </Form>
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
        </Card>
      </Container>
    </>
  )
}
