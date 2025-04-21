import React,{useState} from "react";
import EcommerceContext from "./EcommerceContext"

function GlobalState({children}){
    const [userLogin, setUserLogin] = useState(localStorage.getItem("login"));
    const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem("user")))

    const loginUser = (user)=>{
        setUserLogin(true)
        localStorage.setItem("login",true)
        setUserInfo(user)
        localStorage.setItem("user",JSON.stringify(user))
    }
    const logoutUser = ()=>{
        setUserLogin(false)
        localStorage.removeItem("login")
        localStorage.removeItem("user")
        prueba();
    }
    const prueba = ()=>{

    }
    return(
        <EcommerceContext.Provider 
        value={{
            userLogin,
            loginUser,
            logoutUser,
            userInfo}}>
           
            {children}
        </EcommerceContext.Provider>
    )
}

export default GlobalState