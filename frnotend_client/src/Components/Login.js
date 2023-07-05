
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(data);
  };

  const handleButton = (e) => {
    e.preventDefault();
    const { email, password } = data;
    const API = "https://register-login-api.onrender.com/user/login";
    // console.log("working");
    // navigate("/home");
    if (email && password) {
      axios
        .post(API, data)
        .then((res) => {
          // alert("User registered");
          // console.log(res.data);
          navigate("/home");
        })
        .catch((err) => console.log(err));
    }
    else {
      setError("Please enter email and password.");
    }
  };

  const handleBackBtn = ()=>{
    navigate("/")
  }

  return (
    <div>
      <button onClick={handleBackBtn} className="backButtn">Back</button>
      <div className="loginText">Login here</div>
      <div className="loginForm">
        <div className="logComCon">
          {/* <div>Login entering your Correct credentials</div> */}
          {/* <div>login</div> */}
          <img
            className="lockImg"
            src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png"
            alt="Locked"
          />
          <div className="Logcont1">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              className="lLoginInp"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="Logcont2">
            {/* <label htmlFor="password">Password:</label> */}
            <input
              className="lLoginInp"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <span style={{ color: "red" }}>{error}</span>}
          <button className="Sbutn" onClick={handleButton}>
            Login
          </button>
        </div>
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

export default Login;
