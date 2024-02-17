const { Admin_Url } = require("../../Routes/Route")
const { TIWARY_TUTORIALS_URL } = require("../../Url/Url")


exports.addClass = async(form)=>{
    const res = await fetch(TIWARY_TUTORIALS_URL + Admin_Url.addclass,{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(form)
    })
    return res.json()
}


// class list

exports.classList = async()=>{
    const res = await fetch(TIWARY_TUTORIALS_URL + Admin_Url.classlist,{
        method:"get",
        headers:{"Content-Type":"application/json"}
    })
    return res.json()
}