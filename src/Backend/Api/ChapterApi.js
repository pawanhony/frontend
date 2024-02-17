import { Admin_Url } from "../../Routes/Route"
import { TIWARY_TUTORIALS_URL } from "../../Url/Url"


export const addChapter = async(form)=>{
    const res = await fetch(`${TIWARY_TUTORIALS_URL}${Admin_Url.addChapter}`,{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(form)
    })
    return res.json()
}


// CHAPTER LIST

export const chapterList = async()=>{
    const res = await fetch(TIWARY_TUTORIALS_URL + Admin_Url.chapterList,{
        method:"get",
        headers:{"Contect-Type":"application/json"}
    })
    return res.json()
}



// MATCH CHAPTER BY TITLE

export const matchUnit = async (subjectId)=>{
    const res = await fetch(`${TIWARY_TUTORIALS_URL}${Admin_Url.matchChapter}${subjectId}`,{
        method:"get",
        headers:{"Content-Type":"application/json"}
    })
    return res.json()
}