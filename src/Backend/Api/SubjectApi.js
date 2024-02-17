const { Admin_Url } = require("../../Routes/Route")
const { TIWARY_TUTORIALS_URL } = require("../../Url/Url")


export const addSubject = async (form) => {
    const resdb = await fetch(TIWARY_TUTORIALS_URL + Admin_Url.addSubject, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
    })
    return resdb.json()
}


// SUBJECT LIST

export const subjectList = async ()=>{
    const resdb = await fetch(TIWARY_TUTORIALS_URL + Admin_Url.subjectList,{
        method:"get",
        headers:{"Content-Type":"application/json"}
    })
    return resdb.json()
}



// match subject

export const matchSubjectList = async (classId)=>{
    const res = await fetch(`${TIWARY_TUTORIALS_URL}${Admin_Url.matchSubject}${classId}`,{
        method:"get",
        headers:{"Content-Type":"application/json"}
    })
    return res.json()
}