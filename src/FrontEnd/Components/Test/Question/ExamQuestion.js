import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams} from 'react-router-dom'
import { matchQues } from '../../../../Backend/Api/QuestionApi'
import ExamTimer from './ExamTimer'
import TestOver from './TestOver'
import { AccountContext } from '../../../Context/Context'
import { addResult } from '../../../Api/TestApi'


export default function ExamQuestion(props) {

    const { loginData } = useContext(AccountContext)

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [select, setSelect] = useState(0)
    const [counter, setCounter] = useState(1)
    const [score, setScore] = useState(0)
    const [ques, setQues] = useState([])
    const [finish, setFinish] = useState(false)

   
    // console.log(props.data.id)

    useEffect(() => {
        async function callQuesList() {
            const res = await matchQues(props.data.id)
            console.log(res.data)
            setQues(res.data)
        }
        callQuesList()
    }, [])

    // OPTION SECLECT

    const handleSelect = (e) => {
        // const opt = ({ [e.target.name]: e.target.value })
        // console.log(opt)
        setSelect(e.target.value)
    }

    // MARKS UPDATE

    const updateScore = () => {
        if (select === ques[currentQuestion].answer) {
            setScore(score + 1)
            console.log(`Your Score ${score + 1}`)
            setResult({ ...loginData, score: score + 1 })
        }
    }

    // NEXT BUTTON

    const handleNext = () => {
        setCounter(counter + 1)
        updateScore()
        if (currentQuestion < ques.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
        setSelect(0)
    }

    const [result, setResult] = useState({
        name: loginData?.name,
        email: loginData?.email,
        userId: loginData?.userId,
        score: loginData?.score,
        set: props.data.setNo,
        // total:ques.length
    })

    // SUBMIT BUTTON 

    const handleSubmit = () => {
        //  updateScore(setResult({ ...loginData, score: score}))
        
            if (currentQuestion == ques.length - 1) {
                if (select === ques[currentQuestion].answer) {
                    setScore(score + 1)
                    setResult({ ...loginData, score: score + 1 })
                    console.log(`Your Score ${score + 1}/ ${ques.length}`)
    
                    onFinish()
                    setFinish(!finish)
                    
                } else {
                    // setResult({...result,score:score})
                    onFinish(setResult({ ...result, score: score }))
                    console.log(`Your Total Marks : ${score}`)
                    // navigate('/examOver', { state: { score: score } })
                    setFinish(!finish)
                }
            }
            onFinish()
            setFinish(!finish)
        }


    const onFinish = async () => {
    //    setScore(score)
        // const res = await addResult(result)
        // // console.log(result)
        // if (res) {
        //     console.log(res)
        // }
        // else {
        //     console.log("some error")
        // }
    }


    // BACK BUTTON


    const handleBack = () => {
        if (currentQuestion <= ques.length - 1) {
            setCurrentQuestion(currentQuestion - 1)
            console.log(currentQuestion)
        }
    }



    return (
        <>
        {
            finish ? <TestOver  data={result}/> : 
            <Container className='m-2'>
           
            <Row className='bg-secondary white '>
                <Col md={4}>
                    Name : {loginData?.name}
                </Col>
                <Col md={4} className='center'>
                    <ExamTimer />
                </Col>
                <Col md={2}>
                    Set:{props.data.setNo}
                </Col>
                <Col md={2}>
                    Marks:{ques.length}
                </Col>
            </Row>
            <Row>
                <Card>
                    <Card.Header>Question  {currentQuestion + 1}/ {ques.length}</Card.Header>
                    <Card.Body className='bg-lightgray'>

                        <Row >
                            <Card className='shadow mb-3 p-4'>
                                {ques[currentQuestion]?.questionName}
                            </Card>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <button type='radio' className={`${select == ques[currentQuestion]?.option1 ? "button selected" : 'button'}`} name='option' onClick={handleSelect} value={ques[currentQuestion]?.option1}>{ques[currentQuestion]?.option1}</button>
                            </Col>
                            <Col md={6}>
                                <button type='radio' className={`${select == ques[currentQuestion]?.option2 ? "button selected" : 'button'}`} name='option' onClick={handleSelect} value={ques[currentQuestion]?.option2}>{ques[currentQuestion]?.option2}</button>
                            </Col>
                            <Col md={6}>
                                <button type='radio' className={`${select == ques[currentQuestion]?.option3 ? "button selected" : 'button'}`} name='option' onClick={handleSelect} value={ques[currentQuestion]?.option3}>{ques[currentQuestion]?.option3}</button>

                            </Col>
                            <Col md={6}>
                                <button type='radio' className={`${select == ques[currentQuestion]?.option4 ? "button selected" : 'button'}`} name='option' onClick={handleSelect} value={ques[currentQuestion]?.option4}>{ques[currentQuestion]?.option4}</button>
                            </Col>
                        </Row>
                    </Card.Body>

                    <Card.Footer>
                        <Row className='center'>
                            <Col>
                                {
                                    currentQuestion == 0 ?
                                        ""
                                        :
                                        <Button variant='primary' type='btn' className=' m-2' onClick={handleBack}>Back</Button>
                                }
                            </Col>
                            <Col>
                                {
                                    currentQuestion == ques.length - 1 ?
                                        <Button variant='primary' type='submit' className=' m-2 ' onClick={handleSubmit}>Submit</Button>
                                        :
                                        <Button variant='primary' type='submit' className=' m-2 ' onClick={handleNext}>Next</Button>
                                }

                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Row>
        </Container>
        }
        </>
    )
}
