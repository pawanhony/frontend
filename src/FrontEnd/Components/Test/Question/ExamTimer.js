import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function ExamTimer() {
    const navigate = useNavigate()

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)

    var timer
    useEffect(()=>{
         timer = setInterval(()=>{
            setSeconds(seconds+1)
            if(seconds==59){
                setMinutes(minutes+1)
                setSeconds(0)
            }
        },1000)
timeOver()
        return ()=>clearInterval(timer)
    })
    const timeOver =()=>{
        if(minutes==5){
            console.log("Exam Over")
            navigate('/examOver')
        }
    }
  return (
    <div>
        <h3>{minutes<10 ? "0"+ minutes : minutes}:{seconds<10 ? "0"+seconds : seconds}</h3>
    </div>
  )
}
