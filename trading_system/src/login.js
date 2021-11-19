import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email: "",
        pass:""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        console.log(user)
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }
    return (
        < div >
        <div className="login" style={{padding: "15px"}}>
            <h1 style={{color: '#FF7FBF'}}>Login</h1>
           
            <input type="text" name="email"  onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="pass"  onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div className="or" style={{color: '#262626'}}>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
        </div>
    )
}
export default Login