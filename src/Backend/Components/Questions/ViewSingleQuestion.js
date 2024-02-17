import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { viewQues } from '../../Api/QuestionApi'

export default function ViewSingleQuestion() {

  const { id } = useParams()

  const [quesDetail, setQuesDetail] = useState([])

  useEffect(() => {
    async function callApiQues() {
      const res = await viewQues(id)
      console.log(res.data)
      setQuesDetail(res.data)
    }
    callApiQues()
  }, [])
  return (
    <>
      <Container>
        <Row className='bg-success white p-2'>
          <h2>View Question </h2>
        </Row>

        <Card className='p-2 fs-10'>
          <Row>
            <Col md={2} className='bold-5 red'>
              Question 
            </Col>
            <Col md={10}>
              <Form.Control as="textarea" className="view-input mb-2" placeholder={quesDetail.questionName} disabled />
            </Col>
          </Row>

          <Row>
            <Col md={2} className='bold-4 blue'>
              Option 1
            </Col>
            <Col md={10}>
              <Form.Control className="view-input mb-2" placeholder={quesDetail.option1} disabled />
            </Col>
          </Row>

          <Row>
            <Col md={2} className='bold-4 blue'>
              Option 2
            </Col>
            <Col md={10}>
              <Form.Control className="view-input mb-2" placeholder={quesDetail.option2} disabled />
            </Col>
          </Row>

          <Row>
            <Col md={2} className='bold-4 blue'>
              Option 3
            </Col>
            <Col md={10}>
              <Form.Control className="view-input mb-2" placeholder={quesDetail.option3} disabled />
            </Col>
          </Row>

          <Row>
            <Col md={2} className='bold-4 blue'>
              Option 4
            </Col>
            <Col md={10}>
              <Form.Control className="view-input mb-2" placeholder={quesDetail.option4} disabled />
            </Col>
          </Row>

          <Row>
            <Col md={2} className='bold-4 green'>
              Answer
            </Col>
            <Col md={10}>
              <Form.Control className=" mb-2" placeholder={quesDetail.answer} disabled />
            </Col>
          </Row>

        </Card>
        <Button variant='primary' size='lg' type='button' >OK</Button>
      </Container>
    </>
  )
}
