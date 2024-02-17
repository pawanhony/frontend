import React, { useEffect, useState } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import { matchUnit } from '../../../Backend/Api/ChapterApi'



export default function Chapter() {
    const {id} = useParams()
    const [unit, setUnit] = useState([])

    useEffect(() => {
        async function callClassApi() {
            const res = await matchUnit(id)
            console.log(res)
            setUnit(res.data)
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
                        unit.map((item, index) =>
                            <Col sm={4} key={index}>
                                <Link to={`/test/class/subject/chapter/set/${item._id}`} className='link'>
                                    <Card className="p-3 m-2 shadow" >
                                        <h3 className='p-3'>{item.chapterName}</h3>
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
