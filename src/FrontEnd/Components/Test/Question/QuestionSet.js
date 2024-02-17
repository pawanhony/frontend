import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { matchQues } from '../../../../Backend/Api/QuestionApi'
import { useNavigate, useParams } from 'react-router-dom'
import { AccountContext } from '../../../Context/Context'
import { classList } from "../../../../Backend/Api/ClassApi";
import ExamInstruction from './ExamInstruction'

export default function QuestionSet() {

  const { id } = useParams()

  const [quesSet, setQuesSet] = useState([])
  const [inst, setInst] = useState(false)

  useEffect(() => {
    async function callQuesSetApi() {
      const res = await matchQues(id)
      console.log(res.data)
      setQuesSet(res.data)
    }
    callQuesSetApi()
  }, [])

  // SET Question 
  const totalQuestion = quesSet?.length
  const LIMIT = 2 

  const totalSet = (totalQues, limit) => {
    const page = []
    for (let x = 1; x <= parseInt(totalQues / limit); x++) {
      page.push(x)
    }
    return page
  }

  const handleChange = (setNo) => {
    setData({...data,id:id,setNo:setNo})
    setInst(!inst)
  }

 const [data,setData]= useState({
  id:id,
  setNo:''
 })


  return (
    <>
    {
      inst ? <ExamInstruction data={data}/> 
      :
      <Container>
      <Card className='m-2'>
        <Card.Header className='fs-5 bold-3'>
          {/* {
            quesSet.map((ele,index)=>
            <>
            <div>Class :{ele.className} </div>
          <div>Subject :{ele.subjects[0].subjectName} </div>
          <div>Chapter :{ele.Chapters[0].chapterName} </div>
            </>
            )
          } */}
        </Card.Header>
        <Card.Body>
          <Row className='mb-4 p-2 crd'>
            {
              totalSet(totalQuestion, LIMIT).map((setNo, index) =>
                <Col lg={2} md={3} sm={4} xs={6} key={index}>
                  <Card className='shadow py-5 p-4 mb-4' onClick={()=>handleChange(setNo)}>
                    Set {setNo} Start
                  </Card>
                </Col>
              )
            }
          </Row>
        </Card.Body>
      </Card>
    </Container>
    }
    </>
  )
}
