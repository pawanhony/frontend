import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import { matchSubjectList } from '../../Api/SubjectApi'
import { classList } from '../../Api/ClassApi'
import { addChapter } from '../../Api/ChapterApi'

export default function AddChapter() {

    const [unit, setUnit] = useState({
        classId:"",
        subjectId:"",
        chapterTitle:"",
        chapterName:""
    })

    const [error,setError] = useState({
        classId:"",
        subjectId:"",
        chapterTitle:"",
        chapterName:""
    })

    const [className, setClsName] = useState([])
    useEffect(()=>{
        async function callApi(){
            const res = await classList()
            setClsName(res.data)
        }
        callApi()
    },[])

    const [Sub, setSub] = useState([])

    const handleMatch = async (e)=>{
        const res = await matchSubjectList(e.target.value)
        if(res.status=="success"){
            setSub(res.data)
            console.log(res.data)
            setUnit({...unit, [e.target.name]:e.target.value})
        }
    }

    const handleChange = (e)=>{
        setUnit({...unit, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        // console.log(unit)
        const res = await addChapter(unit)
        console.log(res)
        
        if (res.status === "success"){
            toast.success(res.message)
        }
        else{
            toast.error(res.message)
        }
    }

    return (
        <Container>
            <Row className='bg-success mt-1'>
                <h3 className='white p-1'>ADD CHAPTER</h3>
            </Row>
            <Container className='p-4 mt-2 shadow'>
                <form onSubmit={handleSubmit}>
                    <Card className='m-4 p-2'>
                        <Form.Select size='lg' className="mb-3" name="classId" onChange={handleMatch}>
                            <option>Class</option>
                            {
                                className.map((ele, index) => <option value={ele._id} key={index} >{ele.className}</option>)
                            }
                        </Form.Select>
                        <span>{error.classId}</span>

                        <Form.Select size='lg' className="mb-3" name="subjectId" onChange={handleChange}>
                            <option>Subject</option>
                            {
                                Sub.map((ele, index) => <option value={ele._id} key={index} >{ele.subjectName}</option>)
                            }
                        </Form.Select>
                        <span>{error.subjectId}</span>

                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingInputCustom" type="text" placeholder="Chapter Title" name='chapterTitle' onChange={handleChange} />
                            <label htmlFor="floatingInputCustom">Chapter Title</label>
                            <span>{error.chapterTitle}</span>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingInputCustom" type="text" placeholder="Chapter Name" name='chapterName' onChange={handleChange} />
                            <label htmlFor="floatingInputCustom">Chapter Name</label>
                            <span>{error.chapterName}</span>
                        </Form.Floating>

                        <Button className='mt-3 btn' variant='success' size='lg' type='submit'>Add Chapter</Button>
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
