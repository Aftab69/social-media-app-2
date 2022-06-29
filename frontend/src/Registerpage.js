import React from 'react'
import "./Registerpage.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import image1 from "./images/registrationpagepicture.jpg";

const Registerpage = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    cpassword:""
  })
  const handleChange = (e) =>{
    const nam = e.target.name;
    const val = e.target.value;
    setUser({...user, [nam]:val})
  }

  const handleClick = async(e)=>{
    try{
          e.preventDefault();
          const { firstName, lastName, email, password, cpassword } = user;
          const res = await fetch("/register", {
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify({
              firstName, lastName, email, password, cpassword
            })
          });
          //const data = res.json();
          if(res.status===404){
            window.alert("Please fill up your form");
          } else if(res.status===400){
            window.alert("User already exists");
          } else if(res.status===200){
            window.alert("Registration successful");
            navigate("/login");
          } else {
            window.alert("Registration error");
          }
    }catch(error){
      console.log(error);
    }
   
  }
  
  return (
    <>
      <div className='imageContainerRegistrationPage'>
       <img src={image1} alt="Registration background" />
      </div>
      <div className='containerMidplacer'>
        <div className='textContainerRegistrationPage'>
        <h4>Register Your Account</h4>
        <form className='formDesign'>
          <input placeholder='First name' name="firstName" onChange={handleChange}/>
          <input placeholder='Last name' name="lastName" onChange={handleChange}/>
          <input placeholder='Email' name="email" onChange={handleChange}/>
          <input placeholder='Password' name='password' onChange={handleChange}/>
          <input placeholder='Confirm password' name='cpassword' onChange={handleChange}/>
          <button onClick={handleClick}>Log in</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default Registerpage