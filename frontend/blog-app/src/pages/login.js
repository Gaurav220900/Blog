import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername("");
    setPassword("");
  };

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
            <label style={{color: 'black'}}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
      </div>
    </div>
  );
};

export default Login;
