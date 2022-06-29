import React from 'react'
import "./Homepage.css";
import image1 from "./images/homepagepicture.jpg";
const Homepage = () => {
  return (<>
    <div className='imageContainer'>
      <img src={image1} alt="Homepage background"/>
    </div>
    <div className='homepageContainer'>
      <div className='textContainer'>
        <h4>Welcome to Social Media App</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda
           officia eos cupiditate dolore doloribus!</p>
      </div>
     </div>  
  </>
  )
}

export default Homepage