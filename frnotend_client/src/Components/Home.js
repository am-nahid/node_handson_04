import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
const navi = useNavigate()
const [data, setData] = useState()
const [store, setStore] = useState()
// const {name} = data
// useEffect(()=>{
// const API = "http://localhost:7070/user/register"
// axios.get(API,data)
// .then(res=>{
//   console.log(res.data);
//   console.log("resolved");

// })
// .catch(err=>console.log(err))
// },[])
const handleLogout=()=>{
  const API = "https://register-login-api.onrender.com/user/logout"
  axios.post(API,data)
  .then(res=>{
    setStore(res.data);
    navi('/')
  })
  .catch(err=>console.log(err))
}
   
  return (
    <div className='home'> 

<div className='logoutBut'><button onClick={handleLogout} className='homeLogOut'>Logout</button></div>
       <div className='homeText'> <h1 >Welcome </h1></div>
    <div className="homeBody"><img className="homeImg" src="https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="no img"/></div>

    </div>
  )
}

export default Home

