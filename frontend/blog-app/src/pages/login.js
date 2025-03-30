import React, { useState,useContext } from "react";
import api from "../api";
import {useNavigate} from 'react-router-dom'
import AuthContext from "../store/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const showSuccessToast = (message) => {
          toast.success(message, {
              position: "top-right",
              autoClose: 3000,    
              closeOnClick: true,
              
          });
        }
  
  const showErrorToast = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
    });
  }
    async function handleSubmit(e) {
    e.preventDefault();
    
    try {
    
    const body = { email, password };
    const response = await api.post("/login", body);
    if (response.data) {  
      console.log("Login successful:", response.data);
    }
    getLoggedIn(response.data);
    setEmail("");
    setPassword("");
    showSuccessToast('Login successful!');  // Call before navigate
    setTimeout(() => navigate('/'), 1000);

  } catch (error) {

    showErrorToast(`error: ${error.response.data}`);
    
  };
}

  return (
    <div
      style={{
        display: "flex",
        boxSizing: "border-box",
        margin: "0px",
        padding : "0px",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        background: "linear-gradient(135deg,rgb(119, 10, 235),rgb(109, 141, 197))",
      }}
    >
      <div
        style={{
          padding: "10px",
          width: '300px',
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{color: 'black'}}>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "278px",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              placeholder="Enter your username"
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{color: 'black'}}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "278px",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
        
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <span style={{ color: "gray" }}>Don't have an account? </span>
          <a href="/register" style={{ textDecoration: "none", color: "#007bff" }}>
            Register
          </a>
        </div>
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <span style={{ color: "gray" }}>Forgot Password? </span>
          <a href="/forgotpassword" style={{ textDecoration: "none", color: "#007bff" }}>
            Reset Password
          </a>
          </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
