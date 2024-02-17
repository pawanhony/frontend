import React, { useEffect, useState } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { classList } from '../../../Backend/Api/ClassApi'
import {Link} from 'react-router-dom'

export default function Class() {

    const [cls, setCls] = useState([])

    useEffect(() => {
        async function callClassApi() {
            const res = await classList()
            console.log(res.data)
            setCls(res.data)
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
                        cls.map((item, index) =>
                            <Col sm={4} key={index}>
                                <Link to={`/test/class/${item._id}`} className='link'>
                                    <Card className="p-3 m-2 shadow" >
                                        <h3 className='p-3'>{item.className}</h3>
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
