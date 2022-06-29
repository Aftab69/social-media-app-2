import React from 'react'
import "./Registerpage.css";
import image1 from "./images/registrationpagepicture.jpg";

const Registerpage = () => {
  return (
    <>
      <div className='imageContainerRegistrationPage'>
       <img src={image1} alt="Registration background" />
      </div>
      <div className='containerMidplacer'>
        <div className='textContainerRegistrationPage'>
        <h4>Register Your Account</h4>
        <form className='formDesign'>
          <input placeholder='First name' />
          <input placeholder='Last name' />
          <input placeholder='Email' />
          <input placeholder='Password'/>
          <input placeholder='Confirm password'/>
          <button>Log in</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default Registerpage