import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap'
import { IoArrowBack } from "react-icons/io5";
import { AiFillDelete, AiFillEye, AiFillEdit } from "react-icons/ai";
import { chapterList } from '../../Api/ChapterApi';


export default function ManageChapter() {

    const [unitName, setUnitName] = useState([])
    const [subName, setSubName] = useState([])
    const [show, setShow] = useState(false);
    const [deleteItem, setDeleteItem] = useState()
    const [editData, setEditData] = useState()
    const [update, setUpdate] = useState()

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setDeleteItem(id)
        setShow(true);
    }


    async function callChapter() {
        const res = await chapterList()
        setUnitName(res.data)
        console.log(res.data)
    }
    useEffect(() => {

        callChapter()
    }, [])

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    function Edit(ele, index) {
        const handleChange = (event) => {
            setUpdate({ ...update, [event.target.name]: event.target.value })
            //  console.log(update)
        }
    }

    return (
        <>
            <Container className='openSans'>
                <Row className='bg-success p-2'>
                    <Col md={1}>
                        <button className='btn white fs-6'><IoArrowBack /></button>
                    </Col>
                    <Col md={7}>
                        <h3 className='white chivo'>Chapter Manage</h3>
                    </Col>
                    <Col md={4}>
                        <h5 className='white chivo'>Total Chapter : {unitName.length}</h5>
                    </Col>
                </Row>
                <Row>
                    <form>
                        <Table striped bordered hover>
                            <thead className=''>
                                <tr>
                                    <th>S.No</th>
                                    <th>Chapter Name</th>
                                    <th>Subject Name</th>
                                    <th>Class</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    unitName.map((ele, index) =>
                                        editData === ele._id ? Edit(ele, index) :
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{ele.chapterName}</td>
                                                <td>{ele.Subjects[0].subjectName}</td>
                                                <td>{ele.Class[0].className}</td>
                                                <td onClick={() => handleShow(ele._id)} className='center cursor'><AiFillDelete className='red' /></td>
                                                <td onClick={() => handleEdit(ele._id)} className='center cursor'><AiFillEdit /></td>
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
