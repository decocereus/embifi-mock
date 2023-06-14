import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm1.css";
import MobileSignalTimeBar from "../../Common/MobileSignalTimeBar";
import "../../Common/MobileSignalTimeBar.css";
import InputField from "../../Common/InputField";
import "../../Common/InputField.css";
import SplashButton from "../../Common/SplashButton";
import "../../Common/SplashButton.css";
import DropdownMenu from "../../Common/DropdownMenu";

export default function Register() {
  const navigate = useNavigate();

  const registerLoanApplicationForm = () => {
    navigate("/registerformloanapplication")
  }
  const options = [
    "Proprietorship",
    "Partnership",
    "Limited Liability Partnership (LLP)",
    "Private Limited (Pvt Ltd)",
    "None"
  ];

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
                  type="email"
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
            <div className="dropdownContainer">
              <DropdownMenu options={options} label="Business Document"/>
            </div>
          </div>
          <div className="registerBtn1">
            <SplashButton text="Proceed" isSelect = {false} isProceed = {true} onClick = {registerLoanApplicationForm}/>
          </div>
        </div>
      </div>
    </>
  );
}
