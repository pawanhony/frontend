import React, { useState } from 'react'
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap'

export default function CreateQuesSet() {

    const [QuesSet, setQuesSet] = useState({
        page:"",
        limit: "",
    })

    const handleChange = (e) => {
        setQuesSet({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(QuesSet)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <FloatingLabel controlId="floatingLimit" label="How many Set" className="mb-3">
                        <Form.Control type="number" name="page" placeholder="How many Set" onChange={handleChange} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingLimit" label="Question Limit per Set" className="mb-3">
                        <Form.Control type="number" name="limit" placeholder="Question Limit per Page" onChange={handleChange} />
                    </FloatingLabel>
                </Row>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}
