import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { addClass } from '../../Api/ClassApi';
import { ToastContainer, toast } from 'react-toastify';

export default function AddClass() {
    const [cls, setCls] = useState({
        classTitle: "",
        className: ""
    })

    const handleChange = (e) => {
        setCls({ ...cls, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(cls)

        const dbRes = await addClass(cls)
        console.log(dbRes)
        if (dbRes.status == "success") {
            toast.success(dbRes.message)
            console.log(dbRes)
        }
        else {
            toast.error(dbRes.message)
        }
    }

    return (
        <Container>
            <Card>
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel controlId="floatingClassTitle" label="Class Title" className="mb-3">
                        <Form.Control type="text" placeholder="Class Title" name='classTitle' onChange={handleChange} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingClassName" label="Class Name" className="mb-3">
                        <Form.Control type="text" placeholder="Class Name" name='className' onChange={handleChange} />
                    </FloatingLabel>

                    <Button variant="primary" className="mb-3" type='submit'>Add Class</Button>
                </Form>
            </Card>
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

    )
}
