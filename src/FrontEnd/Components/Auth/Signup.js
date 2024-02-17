import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import { signupApi } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import {classList} from '../../../Backend/Api/ClassApi'
import { AccountContext } from "../../Context/Context";
import { setStorage } from "../../Constant/Storage";

export default function Signup() {

  const {signup} = useContext(AccountContext)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    DOB: '',
    password: '',
    phone: '',
    schoolName: '',
    class: ''
  })

  const [error, setError] = useState({
    name: '',
    email: '',
    DOB: '',
    password: '',
    phone: '',
    schoolName: '',
    class: ''
  })

  const [ cls, setCls] = useState([])
useEffect(()=>{
  async function callClassApi(){
    const res = await classList()
    console.log(res)
    setCls(res.data)
  }
  callClassApi()
},[])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await signupApi(form)
    console.log(res.message)
    if (res.status == "success") {
      localStorage.setItem('login-info', JSON.stringify(res))
      toast.success(res.message)
      setStorage(res.data)
      signup(res.data)
      navigate('/')
    }
    else {
      console.log(res)
      toast.error(res.message)
    }

    const signupForm = form
    Object.keys(signupForm).forEach(input => {
      if (signupForm[input] == "") {
        setError((preInput) => ({ ...preInput, [input]: "Required Field" }))
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

            <FloatingLabel controlId="floatingSchool" label="School / Collage Name" className="mb-3">
              <Form.Control type="text" name="schoolName" placeholder="School / Collage  Name" onChange={handleChange} />
              <span>{error.schoolName}</span>
            </FloatingLabel>

            <Form.Select size='md' className="mb-3" name="class" onChange={handleChange}>
              <option>Select Class</option>
              {
                cls.map((ele, index) => <option value={ele.className} key={index} >{ele.className}</option>)
              }

            </Form.Select>

            <FloatingLabel controlId="floatingMobile" label="Mobile" className="mb-3">
              <Form.Control type="number" name="phone" placeholder="Mobile" onChange={handleChange} />
              <span>{error.phone}</span>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" name="email" placeholder="name@example.com" onChange={handleChange} />
              <span>{error.email}</span>
            </FloatingLabel>

            <FloatingLabel controlId="floatingDOB" label="Date of Birth" className="mb-3">
              <Form.Control type="date" name="DOB" placeholder="Date of Birth" onChange={handleChange} />
              <span>{error.DOB}</span>
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
              <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
              <span>{error.password}</span>
            </FloatingLabel>



            <Button type='submit' className="mb-3">Submit</Button>
          </Card>
        </form>
        <ToastContainer

          position="top-right"
          autoClose={2000}
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
