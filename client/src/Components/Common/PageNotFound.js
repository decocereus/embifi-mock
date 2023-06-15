import React from "react";
import { useNavigate } from "react-router-dom";
import SplashButton from "./SplashButton";
import "./PageNotFound.css";

export default function PageNotFound() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  return (
    <div className="pageNotFoundContainer">
      <div className="notFoundTextBtnContainer">
        <div className="notFoundTextContainer">
          <h1 className="headingText">Oops that page doesn't exist.</h1>
        </div>
        <div className="btn">
          <SplashButton
            text="Back to Home"
            isProceed={true}
            isSpecial={true}
            onClick={backToHome}
          />
        </div>
      </div>
    </div>
  );
}
