

import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import { classList } from '../../Api/ClassApi'
import { addSubject, matchSubjectList } from '../../Api/SubjectApi'

export default function AddSubject() {

    const [subName, setSubName] = useState({
        classId: "",
        subjectTitle: "",
        subjectName: ""
    })

    const [error, setError] = useState({
        classId: "",
        subjectTitle: "",
        subjectName: ""
    })

    const [clsName, setClsName] = useState([])

    useEffect(() => {
        async function callApi() {
            const response = await classList()
            setClsName(response.data)
            console.log(response.data)
        }
        callApi()
    }, [])

    const handleChange = (e) => {
        setSubName({ ...subName, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(subName)
        const res = await addSubject(subName)
        console.log(res)
        if (res.status == "success") {
            toast.success(res.message)
            console.log(res)
        }
        else {
            toast.error(res.message)
        }
    }

    return (
        <Container>
            <Row className='bg-success mt-1'>
                <h3 className='white p-1'>ADD SUBJECT</h3>
            </Row>
            <Container className='p-4 mt-2 shadow'>
                <form onSubmit={handleSubmit}>
                    <Card className='m-4 p-2'>
                        <Form.Select size='lg' className="mb-3" name="classId" onChange={handleChange}>
                            <option>Class</option>
                            {
                                clsName.map((ele, index) => <option value={ele._id} key={index} >{ele.className}</option>)
                            }

                        </Form.Select>
                        <span>{error.classId}</span>
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingInputCustom" type="text" placeholder="Subject Title" name='subjectTitle' onChange={handleChange} />
                            <label htmlFor="floatingInputCustom">Subject Title</label>
                            <span>{error.subjectTitle}</span>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingInputCustom" type="text" placeholder="Subject Name" name='subjectName' onChange={handleChange} />
                            <label htmlFor="floatingInputCustom">Subject Name</label>
                            <span>{error.subjectName}</span>
                        </Form.Floating>

                        <Button className='mt-3 btn' variant='success' size='lg' type='submit'>Add Subject</Button>
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
        </Container>
    )
}
