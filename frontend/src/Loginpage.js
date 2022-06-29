import React from 'react'
import "./Loginpage.css";
import image1 from "./images/loginpagepicture.jpg";

const Loginpage = () => {
  return (
    <>
      <div className='imageContainerLoginPage'>
       <img src={image1} alt="login background" />
      </div>
      <div className='containerMidplacer'>
        <div className='textContainerLoginPage'>
        <h4>Log In to Your Account</h4>
        <form className='formDesign'>
          <input placeholder='Email' />
          <input placeholder='Password'/>
          <button>Log in</button>
        </form>
        </div>
      </div>
    </>
    
  )
}

export default Loginpage