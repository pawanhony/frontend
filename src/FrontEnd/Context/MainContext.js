import { useEffect, useState } from "react";
import { AccountContext } from "./Context";
import { clearStorage, getStorage, hasStorage } from "../Constant/Storage";
import { useNavigate } from "react-router-dom";


export default function MainContext({ children }) {

    const navigate = useNavigate()
    const [loginData, setLoginData] = useState()

    useEffect(() => {
        if (hasStorage()) {
            setLoginData(getStorage())
        }
    }, [])

    // LOGIN Conxtex

    function login(data) {
        setLoginData(data)
    }

    function signup(data) {
        setLoginData(data)
    }

    function logout() {
        clearStorage()
        setLoginData(null)
        navigate('/login')
    }

   


    const initData = {
        login: login,
        signup: signup,
        loginData: loginData,
        logout: logout
    }

    return (
        <AccountContext.Provider value={initData}>
            {children}
        </AccountContext.Provider>
    )
}