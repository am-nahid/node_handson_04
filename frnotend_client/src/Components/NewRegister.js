
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'

function NewRegister() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    password: "",
  });
  const [store, setStore] = useState(null);
  const [error, setError] = useState(null);

  const handleButton = (e) => {
    e.preventDefault();
    setStore({ ...data });
    console.log(store,"store");
    console.log("data", data);
    const { email, password } = data;
    const API = "http://localhost:7070/user/register"
    
    setData({
      name: "",
      phonenumber: "",
      email: "",
      password: ""
    });
    if (email && password) {
      axios.post(API,data)
        .then(res => {
          // alert("user registered")
          console.log(res.data);
          navigate('/home');
        })
        .catch((err) => console.log(err));
    } else {
      setError("Please enter email and password.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="SignupCon">
      <div className="SignText">Sign up here</div>
      <div className="cardForm">
        <form className="SignupForm">
          <img
            className="lockImg"
            src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png"
            alt="Locked"
          />
          <input
            className="sInp"
            type="text"
            name="name"
            value={data.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
            required
          />
          <input
            className="sInp"
            type="number"
            name="phonenumber"
            value={data.phonenumber}
            placeholder="Enter Your Phone Number"
            onChange={handleChange}
            required
          />
          <input
            className="sInp"
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
            required
          />
          <input
            className="sInp"
            type="password"
            name="password"
            value={data.password}
            placeholder="Enter Your Password"
            onChange={handleChange}
            required
          />
          {error && <span style={{ color: "red" }}>{error}</span>}
          <button className="Sbutn" onClick={handleButton}>
            Signup
          </button>
          <div>
            <NavLink to="/user/login"> Already have an account? Sign in</NavLink>
          </div>
        </form>
      </div>

      <div className="homeBody">
        <img
          className="homeImg"
          src="https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
          alt="no img"
        />
      </div>
    </div>
  );
}

export default NewRegister;
