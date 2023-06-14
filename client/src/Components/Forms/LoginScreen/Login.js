import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email !== "" && password !== ""){
      try {
        // Make a POST request to the login API endpoint
        const response = await axios.post("http://localhost:5000/login", {
          email,
          password,
        });
  
        // Assuming the API returns a token in the response
        const { token } = response.data;
  
        // Store the token in local storage or state for later use
        localStorage.setItem("token", token);
  
        // Redirect to the dashboard or perform any other action
        navigate("/dashboard")
      } catch (error) {
        console.error(error);
        // Handle the error, display a message, etc.
      }
    } else {
      alert("Please add email and password")
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
