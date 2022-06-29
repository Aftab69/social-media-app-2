import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

//styles
const navlinkstyle = {"textDecoration":"none","color":"rgba(255, 255, 0, 0.753)"};

const Navbar = () => {
  return (
    <nav>
        <div className='navlinkElement'><NavLink style={navlinkstyle} to="/"><span className='singleElement'>Home</span></NavLink></div>
        <div className='navlinkElement'><NavLink style={navlinkstyle} to="/profile"><span className='singleElement'>Profile</span></NavLink></div>
        <div className='navlinkElement'><NavLink style={navlinkstyle} to="/login"><span className='singleElement'>Login</span></NavLink></div>
        <div className='navlinkElement'><NavLink style={navlinkstyle} to="/register"><span className='singleElement'>Register</span></NavLink></div>
    </nav>
  )
}

export default Navbar