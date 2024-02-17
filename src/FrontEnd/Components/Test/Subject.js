import React, { useEffect, useState } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import { matchSubjectList } from '../../../Backend/Api/SubjectApi'



export default function Subject() {
    const {id} = useParams()
    const [sub, setSub] = useState([])

    useEffect(() => {
        async function callClassApi() {
            const res = await matchSubjectList(id)
            console.log(res)
            setSub(res.data)
        }
        callClassApi()
    }, [])


    return (
        <>
            <Container>
                <Row>
                    <h2>Test</h2>
                </Row>
                <Row>
                    {
                        sub.map((item, index) =>
                            <Col sm={4} key={index}>
                                <Link to={`/test/class/subject/${item._id}`} className='link'>
                                    <Card className="p-3 m-2 shadow" >
                                        <h3 className='p-3'>{item.subjectName}</h3>
                                    </Card>
                                </Link>
                            </Col>
                        )
                    }

                </Row>
            </Container>
        </>
    )
}
