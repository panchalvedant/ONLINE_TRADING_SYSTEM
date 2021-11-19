import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        dob:"",
        phone:"",
        acno:"",
        pass:"",
        cpass: ""
    })

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    
    
    const register = () => {
   // let errors={};
    let count=0;
    const { name, email, pass, cpass, dob, phone, acno } = user

    if(!name){
        alert("Name is required")
        count++;
    }
    if(!email){
        alert("Empty email is not valid")
        count++;
    } else if(!/\S+@\S+\.\S+/.test(email)){
        alert("Email is invalid")
        count++;
    }
    if(!pass){
        alert("Empty password is not valid")
        count++;
    } else if (pass.length < 5){
        alert("Password length must be More than 5 charcters")
        count++;
    }
    if(!cpass){
        alert("Empty Confirm password is not valid")
        count++;
    }
    if(!phone){
        alert("Empty phone no is not valid")
        count++;
    }else if (phone.length < 10 || phone.length > 10){
        alert("Phone number must be 10 charcters")
        count++;
    }
    if(!acno){
        alert("Empty Account No. is not valid")
        count++;
    }else if (acno.length < 12 || acno.length > 12){
        alert("Accoumt number must be 12 charcters")
        count++;
    }
    console.log(count)
        console.log("User", user)
       
        console.log(count)
        if(  pass && cpass && (count === 0)){
            console.log("avi")
            axios.post("http://localhost:9002/register", user)
            .then(res => {
                alert(res.data.message)
                history.push("/login")
            })
        }         
    }



    return (
        <>
        <div className="register">
            
            <h1 style={{color: '#FF7FBF'}}>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            {errors.name && <p className="error">{errors.name}</p>}
            <input type="email" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            {errors.email && <p className="error">{errors.email}</p>}
            <input type="text" name="dob" value={user.dob} placeholder="Your Birthdate in form DD/MM/YYYY" onFocus="(this.type='date')" onChange={ handleChange } required></input>
            <input type="phone" name="phone" size="10" value={user.phone} required placeholder="Your Mobile no." onChange={ handleChange }></input>
            {errors.phone && <p className="error">{errors.phone}</p>}
            <input type="text" name="acno" value={user.acno} required placeholder="Your Account No." onChange={ handleChange }></input>
            {errors.acno && <p className="error">{errors.acno}</p>}
            <input type="password" name="pass" value={user.pass} placeholder="Your Password" onChange={ handleChange }></input>
            {errors.pass && <p className="error">{errors.pass}</p>}
            <input type="password" name="cpass" value={user.cpass} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} style={{marginTop:"20px"}}>Register</div>
            
        </div>
        </>
    )
}

export default Register