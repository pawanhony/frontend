const { Admin_Url } = require("../../Routes/Route")
const { TIWARY_TUTORIALS_URL } = require("../../Url/Url")

// CLASS LIST BY TITLE

exports.getClassByTitle = async(title)=>{
    const res = await fetch(`${TIWARY_TUTORIALS_URL}${Admin_Url.getClassbyTitle}${title}`,{
        method:"get",
        headers:{"Content-Type":"application/json"}
    })
    return res.json()
}


exports.getSubjectListTitle = async(id)=>{
const res = await fetch(`${TIWARY_TUTORIALS_URL}${Admin_Url.getmatchSubjectbyTitle}${id}`,{
    method:"get",
    headers:{"Content-Type":"application/json"}
})
return res.json()
}


// GET CHAPTER BY TITLE

exports.getChapterByTitle = async(id)=>{
    const res = await fetch(`${TIWARY_TUTORIALS_URL}${Admin_Url.getChapterbyTitle}${id}`,{
        method:"get",
        headers:{"Content-Type":"application/json"}
    })
    return res.json()
}


// get Question for SETs

exports.getQuesSet = async ()=>{
    const res = await fetch(`${TIWARY_TUTORIALS_URL}${Admin_Url.questionSet}`,{
        params:{
            page:1,
            limit:2
        }
    })
    return res.json()
}


// RESULT

exports.addResult = async(resultData)=>{
    const res = await fetch(`${TIWARY_TUTORIALS_URL}${Admin_Url.result}`,{
        method:"post",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(resultData)
    })
    return res.json()
}