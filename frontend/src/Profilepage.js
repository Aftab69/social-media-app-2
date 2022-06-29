import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Profilepage.css";

const Profilepage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [style1,setStyle1] = useState({visibility:"hidden"});
  const callProfilepage = async() =>{
      const res = await fetch("/profile",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json"
        },
        credentials:"include"
      })
      const data = await res.json();
      setUserInfo(data);
      setStyle1({visibility:"visible"});
      if(res.status===400){
        navigate("/login");
      }
  }

  useEffect(()=>{
     callProfilepage();
      // eslint-disable-next-line
  },[])
  return (
  <>
    <div style={style1}>Hi {userInfo.firstName}</div>
  </>
    
  )
}

export default Profilepage