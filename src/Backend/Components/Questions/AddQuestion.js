import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import { classList } from '../../Api/ClassApi'
import { matchSubjectList } from '../../Api/SubjectApi'
import { matchUnit } from '../../Api/ChapterApi'
import { addQuestion } from '../../Api/QuestionApi'

export default function AddQuestion() {

    const [ques, setQues] = useState({
        classId: "",
        subjectId: "",
        chapterId: "",
        questionName: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: ""
    })

    const [error, setError] = useState({
        classId: "",
        subjectId: "",
        chapterId: "",
        questionName: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: ""
    })
    const [className, setClsName] = useState([])

    useEffect(() => {
        async function callApi() {
            const res = await classList()
            setClsName(res.data)
        }
        callApi()
    }, [])

    const [Sub, setSub] = useState([])

    const handleMatch = async (e) => {
        const res = await matchSubjectList(e.target.value)
        if (res.status == "success") {
            setSub(res.data)
            console.log(res.data)
            setQues({ ...ques, [e.target.name]: e.target.value })
        }
    }

    const [chapter, setChapter] = useState([])

    const handleChapter = async (e) => {
        const res = await matchUnit(e.target.value)
        console.log(res)
        if (res.status == "success") {
            setChapter(res.data)
            console.log(res.data)
            setQues({ ...ques, [e.target.name]: e.target.value })
        }
    }

    const handleChange = (e) => {
        setQues({ ...ques, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const res = await addQuestion(ques)
        console.log(res)

        if (res.status === "success") {
            toast.success(res.message)
        }
        else {
            toast.error(res.message)
        }
    }


    return (
        <Container>
            <Row className='bg-success mt-1'>
                <h3 className='white p-1'>ADD QUESTION</h3>
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

                        <Form.Select size='lg' className="mb-3" name="subjectId" onChange={handleChapter}>
                            <option>Subject</option>
                            {
                                Sub.map((ele, index) => <option value={ele._id} key={index} >{ele.subjectName}</option>)
                            }
                        </Form.Select>
                        <span>{error.subjectName}</span>

                        <Form.Select size='lg' className="mb-3" name="chapterId" onChange={handleChange}>
                            <option>Chapter Name</option>
                            {
                                chapter.map((ele, index) => <option value={ele._id} key={index} >{ele.chapterName}</option>)
                            }
                        </Form.Select>
                        <span>{error.chapterTitle}</span>

                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingInputCustom" type="text" placeholder="Question" name='questionName' onChange={handleChange} />
                            <label htmlFor="floatingInputCustom">Question</label>
                            <span>{error.questionName}</span>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingInputCustom" type="text" placeholder="Option 1" name='option1' onChange={handleChange} />
                            <label htmlFor="floatingInputCustom">Option 1</label>

                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingInputCustom" type="text" placeholder="Option 2" name='option2' onChange={handleChange} />
                            <label htmlFor="floatingInputCustom">Option 2</label>

                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingInputCustom" type="text" placeholder="Option 3" name='option3' onChange={handleChange} />
                            <label htmlFor="floatingInputCustom">Option 3</label>

                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingInputCustom" type="text" placeholder="Option 4" name='option4' onChange={handleChange} />
                            <label htmlFor="floatingInputCustom">Option 4</label>

                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingInputCustom" type="text" placeholder="Answer" name='answer' onChange={handleChange} />
                            <label htmlFor="floatingInputCustom">Answer</label>

                        </Form.Floating>

                        <Button className='mt-3 btn' variant='success' size='lg' type='submit'>Add Question</Button>
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
