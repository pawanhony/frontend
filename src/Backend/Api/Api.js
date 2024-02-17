

// Admin Login

const { Admin_Url } = require("../../Routes/Route")
const { TIWARY_TUTORIALS_URL } = require("../../Url/Url")

exports.adminLogin = async (login)=>{
    const dbRes = await fetch(TIWARY_TUTORIALS_URL + Admin_Url.admin_login, {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
body:JSON.stringify(login)
    })
    return dbRes.json()
}


// Admin Signup

exports.adminSignup = async (form)=>{
    const res = await fetch(TIWARY_TUTORIALS_URL + Admin_Url.admin_signup,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(form)
    })
    return res.json()
}