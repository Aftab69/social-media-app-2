import React from 'react'
import "./Loginpage.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import image1 from "./images/loginpagepicture.jpg";

const Loginpage = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    email:"",
    password:""
  })
  const handleChange = (e) =>{
    const nam = e.target.name;
    const val = e.target.value;
    setUser({...user,[nam]:val})
  }
  const handleClick = async(e) =>{
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })
    //const data = res.json();
    if(res.status===200){
      window.alert("Login Successful");
      navigate("/profile");
    } else if(res.status===404){
      window.alert("Please fill up your form")
    } else if(res.status===400){
      window.alert("Invalid Credentials")
    }
  }
  return (
    <>
      <div className='imageContainerLoginPage'>
       <img src={image1} alt="login background" />
      </div>
      <div className='containerMidplacer'>
        <div className='textContainerLoginPage'>
        <h4>Log In to Your Account</h4>
        <form className='formDesign'>
          <input placeholder='Email' name='email' onChange={handleChange} />
          <input placeholder='Password' name='password' onChange={handleChange} />
          <button onClick={handleClick}>Log in</button>
        </form>
        </div>
      </div>
    </>
    
  )
}

export default Loginpage