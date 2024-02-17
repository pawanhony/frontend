const { Student_Url } = require("../../Routes/Route")
const { TIWARY_TUTORIALS_URL } = require("../../Url/Url")



// LOGIN 

exports.loginApi = async (login)=>{
    const res = await fetch(TIWARY_TUTORIALS_URL + Student_Url.login, {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(login)
    })
    return res.json()
}


// SignUp

exports.signupApi = async (form)=>{
    const res = await fetch(TIWARY_TUTORIALS_URL + Student_Url.signup,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(form)
    })
    return res.json()
}