import React from "react";
import "./RegisterForm1.css";
import MobileSignalTimeBar from "../../Common/MobileSignalTimeBar";
import InputField from "../../Common/InputField";
import SplashButton from "../../Common/SplashButton";

export default function Register() {
  return (
    <>
      <div className="globalContainer">
        <div className="registerFormContainer1">
          <div className="mobileTime">
            <MobileSignalTimeBar />
          </div>
          <div className="inputFieldsContainer">
            <div className="name">
              <InputField
                placeholder="As Per PAN"
                label="First Name (As per PAN)"
                type="text"
                required={true}
              />
            </div>
            <div className="mobileAndEmailContainer">
              <div className="mobile">
                <InputField
                  placeholder="Enter your Mobile Number"
                  label="Mobile Number"
                  type="text"
                  required={true}
                />
              </div>
              <div className="email">
                <InputField
                  placeholder="Enter your Email ID"
                  label="Email ID"
                  type="text"
                  required={false}
                />
              </div>
            </div>
            <div className="dob">
              <InputField
                placeholder="dd-mm-yyyy"
                label="DOB"
                type="Date"
                required={true}
              />
            </div>
          </div>
          <div className="btn">
            <SplashButton text="Proceed" />
          </div>
        </div>
      </div>
    </>
  );
}
