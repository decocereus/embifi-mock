import React, { useState } from "react";
import "./Login.css";
// import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const response = await axios.post('/api/login', { email, password });
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <div className="globalContainer">
      <div className="container">
      <div className="embifiText">
            <h2>Embifi</h2>
          </div>
        <div className="formBox">
          <div className="formContainer">
            <form
              className="form"
              //   onSubmit={handleSubmit}
            >
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
                <button className="buttonText"> Login </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
