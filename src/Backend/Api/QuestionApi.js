import { Admin_Url } from "../../Routes/Route"
import { TIWARY_TUTORIALS_URL } from "../../Url/Url"


export const addQuestion = async (form) => {
    const resdb = await fetch(TIWARY_TUTORIALS_URL + Admin_Url.addQuestion, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
    })
    return resdb.json()
}

// Question LIST

export const QuestionList = async()=>{
    const res = await fetch(TIWARY_TUTORIALS_URL + Admin_Url.questionList,{
        method:"get",
        headers:{"Contect-Type":"application/json"}
    })
    return res.json()
}


// MATCH Question BY TITLE

export const matchQues = async (chapterId)=>{
    const res = await fetch(`${TIWARY_TUTORIALS_URL}${Admin_Url.matchQuestion}${chapterId}`,{
        method:"get",
        headers:{"Content-Type":"application/json"}
    })
    return res.json()
}


// VIEW QUESTION

export const viewQues = async (id)=>{
    const res = await fetch(`${TIWARY_TUTORIALS_URL}${Admin_Url.viewQuestion}${id}`,{
        method:"get",
        headers:{"Content-Type":"application/json"}
    })
    return res.json()
}