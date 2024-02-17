import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row, Table } from 'react-bootstrap'
import { IoArrowBack } from "react-icons/io5";
import { AiFillDelete, AiFillEye, AiFillEdit } from "react-icons/ai";
import { classList } from '../../Api/ClassApi';
import { matchSubjectList } from '../../Api/SubjectApi';
import { matchUnit } from '../../Api/ChapterApi';
import { matchQues } from '../../Api/QuestionApi';
import { Link } from 'react-router-dom';

export default function ManageQuestion() {

    const [ques, setQues] = useState([])
    const [editData, setEditData] = useState()
    const [update, setUpdate] = useState()
    const [openModel, setOpenModel] = useState(false)

    function Edit(ele, index) {
        const handleChange = (event) => {
            setUpdate({ ...update, [event.target.name]: event.target.value })
            //  console.log(update)
        }
    }

    // Show Class

    const [cls, setCls] = useState([])

    useEffect(() => {
        async function callClass() {
            const res = await classList()
            setCls(res.data)
        }
        callClass()
    }, [])

    // Show Subject Dropdown

    const [sub, setSub] = useState([])

    const handleMatch = async (e) => {
        const res = await matchSubjectList(e.target.value)
        if (res.status == "success") {
            setSub(res.data)
            console.log(res.data)
        }
    }

    // show Chapter Dropdown

    const [unit, setUnit] = useState([])

    const handleSubject = async (e) => {
        const res = await matchUnit(e.target.value)
        console.log(res)
        if (res.status == "success") {
            setUnit(res.data)
            console.log(res.data)
            // setQues({ ...ques, [e.target.name]: e.target.value })
        }
    }
    // Show Question

    const handleChapter = async (e) => {
        const res = await matchQues(e.target.value)
        if (res.status == "success") {
            setQues(res.data)
            console.log(res.data)
        }
    }


    return (
        <>
            <Container>
                <Row className='bg-success p-2'>
                    <Col md={1}>
                        <button className='btn white fs-6'><IoArrowBack /></button>
                    </Col>
                    <Col md={7}>
                        <h3 className='white chivo'>Question Manage</h3>
                    </Col>
                    <Col md={4}>
                        <h5 className='white chivo'>Total Question : {ques.length}</h5>
                    </Col>
                </Row>
                <Row className='bg-danger p-2'>
                    <Col md={4}>
                        <Form.Select size='lg' className="mb-3" name="classId" onChange={handleMatch}>
                            <option>Class</option>
                            {
                                cls.map((ele, index) => <option value={ele._id} key={index} >{ele.className}</option>)
                            }
                        </Form.Select>
                    </Col>
                    <Col md={4}>
                        <Form.Select size='lg' className="mb-3" name="subjectId" onChange={handleSubject}>
                            <option>Subject</option>
                            {
                                sub.map((ele, index) => <option value={ele._id} key={index} >{ele.subjectName}</option>)
                            }
                        </Form.Select>
                    </Col>
                    <Col md={4}>
                        <Form.Select size='lg' className="mb-3" name="chapterId" onChange={handleChapter}>
                            <option>Chapter Name</option>
                            {
                                unit.map((ele, index) => <option value={ele._id} key={index} >{ele.chapterName}</option>)
                            }
                        </Form.Select>
                    </Col>
                </Row>
                <Row className=''>
                    <form>
                        <Table striped bordered hover className='p-2'>
                            <thead>
                                <tr>
                                    <th>S. No</th>
                                    <th>Question</th>
                                    <th>edit</th>
                                    <th>view</th>
                                    <th>del</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                ques.map((ele, index) =>
                                editData === ele._id ? Edit(ele, index) :
                                    <tr key={index}>
                                        <td>{index+1}.</td>
                                    <td>{ele.questionName}</td>
                                    <td ><AiFillEdit /></td>
                                    <td className='center'><Link to={`/dashboard/manage_question/view/${ele._id}`} ><AiFillEye /></Link></td>
                                    <td><AiFillDelete className='red' /></td>
                                </tr>
                                )
                                }
                                
                            </tbody>
                        </Table>
                    </form>
                </Row>
            </Container>
        </>
    )
}
