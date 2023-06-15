import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import SplashButton from "../Common/SplashButton";

export default function Home() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/welcome");
  };

  return (
    <div className="homeGlobalContainer">
      <div className="contentContainer">
        <div className="welcomeToEmbifiTextLogoContainer">
          <img
            src="/assets/Vector.png"
            alt="vector"
            className="welcomeToEmbifiLogo"
          />
          <h1 className="welcomeToEmbifiText">Welcome to Embifi</h1>
        </div>
        <div className="loginRegisterButtonContainer">
          <div className="loginBtn">
            <SplashButton
              text="Login"
              isSelect={true}
              isProceed={true}
              isSpecial ={true}
              onClick={goToLogin}
            />
          </div>
          <div className="registernewUserBtn">
            <SplashButton
              text="Register"
              isSelect={true}
              isProceed={false}
              isSpecial ={true}
              onClick={goToRegister}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
