import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap'
import { IoArrowBack } from "react-icons/io5";
import { AiFillDelete, AiFillEye, AiFillEdit } from "react-icons/ai";
import { subjectList } from '../../Api/SubjectApi';

export default function ManageSubject() {

    
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


    async function callSubject() {
        const res = await subjectList()
        setSubName(res.data)
        console.log(res.data)
    }
    useEffect(() => {

        callSubject()
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
                        <h3 className='white chivo'>Subject Manage</h3>
                    </Col>
                    <Col md={4}>
                        <h5 className='white chivo'>Total Subject : {subName.length}</h5>
                    </Col>
                </Row>
                <Row>
                    <form>
                        <Table striped bordered hover>
                            <thead className=''>
                                <tr>
                                    <th>S.No</th>
                                    <th>Class</th>
                                    <th>Subject Name</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    subName.map((ele, index) =>
                                        editData === ele._id ? Edit(ele, index) :
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{ele.class[0].className}</td>
                                                <td>{ele.subjectName}</td>
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
