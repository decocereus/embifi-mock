import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // 
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        // Redirect to the dashboard or perform any other desired actions
        const token = data.token;
        localStorage.setItem("token", token);
        navigate("/dashboard")
        console.log("Login successful");
      } else if (response.status === 401) {
        // Invalid email or password
        alert("Invalid email or password or please register first");
        //navigate("/")
      } else if (response.status === 409) {
        // User needs to register
        alert("Please register first");
      } else {
        // Other error occurred
        alert("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="globalContainer">
      <div className="container">
        <div className="embifiText">
          <h2>Embifi</h2>
        </div>
        <div className="formBox">
          <div className="formContainer">
            <form className="form">
              <div className="emailPassContainer">
                <div className="emailContainer">
                  <div className="emailPlaceholder">
                    <input
                      className="emailInput"
                      id="email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="passwordContainer">
                  <div className="passwordPlaceholder">
                    <input
                      className="passwordInput"
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="button">
                <button className="buttonText" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
