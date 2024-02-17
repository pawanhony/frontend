import React, { memo, useEffect, useMemo } from 'react'
import { Card, Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { addResult } from '../../../Api/TestApi'


function TestOver(props) {
      console.log(props.data)

      useEffect(()=>{

        async function resultAdd(){
          const res = await addResult(props.data)
          // console.log(result)
          if (res) {
              console.log(res)
          }
          else {
              console.log("some error")
          }
        }
        resultAdd()
      },[props.data])

      
  
    return (
      <Container>
          <Card className='p-3'>
          <div>{`Thank you ${props.data.name}.. Submit your Test`}</div>
          <div>Your Total Score {props.data.score}</div>
          <div>Your Total Score {props.data.total}</div>
          </Card>
      </Container>
    )
}

export default memo(TestOver)
