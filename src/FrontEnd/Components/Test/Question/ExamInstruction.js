import React, { memo, useState } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import ExamQuestion from './ExamQuestion'

function ExamInstruction(props) {

    
    console.log(props.data)

    const [startTest, setStartTest] = useState(false)

    
    const startExam = () => {
        console.log("Start")
        setStartTest(!startTest)
    }
    return (
        <>
            {
                startTest ? <ExamQuestion data={props.data}/> 
                :
                <Container>
                <Row>
                    <h3 className='center p-3 bg-success white'>Exam Instructions</h3>
                </Row>
                <Row>
                    <Card className='p-2'>
                        <Card.Header>
                            <Row>Class :{ }</Row>
                            <Row>Subject : { }</Row>
                            <Row>Chapter : { }</Row>
                        </Card.Header>
                        <Card.Body>
                            <ol>
                                <li>The examination will comprise of Objective type Multiple Choice Questions (MCQs)</li>
                                <li>All questions are compulsory and each carries One mark.</li>
                                <li>The total number of questions, duration of examination, will be different based on the course, the detail is available on your screen.</li>
                                <li>The Subjects or topics covered in the exam will be as per the Syllabus.</li>
                                <li> There will be NO NEGATIVE MARKING for the wrong answers.</li>

                            </ol>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant='primary' onClick={startExam} type='button'>Start Exam</Button>
                        </Card.Footer>
                    </Card>
                </Row>
            </Container>
            }
        </>
    )
}


export default memo(ExamInstruction)