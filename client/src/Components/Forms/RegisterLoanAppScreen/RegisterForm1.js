import React, { useState } from "react";
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
  const [userForm, setUserForm] = useState({
    name: "",
    mobileNumber: "",
    emailId: "",
    dateOfBirth: Date(),
    password: "",
    businessType: "",
  });

  const setUserName = (e) => {
    setUserForm({ ...userForm, name: e.target.value });
  };
  const setMobileNumber = (e) => {
    setUserForm({ ...userForm, mobileNumber: e.target.value });
  };
  const setEmail = (e) => {
    setUserForm({ ...userForm, emailId: e.target.value });
  };
  const setDateOfBirth = (e) => {
    setUserForm({ ...userForm, dateOfBirth: e.target.value });
  };
  const setPassword = (e) => {
    setUserForm({ ...userForm, password: e.target.value });
  };
  const setBusinessType = (option) => {
    setUserForm({ ...userForm, businessType: option });
  };

  const handleRegister = async () => {
    for (let [key, value] of Object.entries(userForm)) {
      if (!value) {
        alert("Please fill in the required fields marked by *");
        return;
      }
    }
    try {
      const response = await fetch("http://localhost:5000/registerform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userForm),
      });

      const data = await response.json();
      console.log(data.token, data.identiferNumber, data)
      
      // localStorage.setItem("identifierNumber", data.identifierNumber);

      if (response.ok) {
        // Registration successful
        // Redirect to the login page or perform any other desired actions
        localStorage.setItem("token", data.token);
        navigate("/registerformloanapplication");
      } else if (response.status === 409) {
        // User already exists
        alert("User already exists. Please login instead.");
        navigate("/Login");
      } else {
        // Other error occurred
        alert("An error occurred. Please try again later.");
        navigate("/");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.log(error);
      navigate("/");
    }
  };

  const options = [
    "Proprietorship",
    "Partnership",
    "Limited Liability Partnership (LLP)",
    "Private Limited (Pvt Ltd)",
    "None",
  ];

  return (
    <>
      <div className="globalContainer">
        <div className="registerFormContainer1">
          <div className="mobileTimeRegister1">
            <MobileSignalTimeBar isWhite={false} />
          </div>
          <div className="inputFieldsContainer">
            <div className="name">
              <InputField
                placeholder="As Per PAN"
                label="First Name (As per PAN)"
                type="text"
                required={true}
                onChange={setUserName}
              />
            </div>
            <div className="mobileAndEmailContainer">
              <div className="mobile">
                <InputField
                  placeholder="Enter your Mobile Number"
                  label="Mobile Number"
                  type="text"
                  required={true}
                  onChange={setMobileNumber}
                />
              </div>
              <div className="email">
                <InputField
                  placeholder="Enter your Email ID"
                  label="Email ID"
                  type="email"
                  required={true}
                  onChange={setEmail}
                />
              </div>
            </div>
            <div className="dobPasswordContainer">
              <div className="dob">
                <InputField
                  placeholder="dd-mm-yyyy"
                  label="DOB"
                  type="Date"
                  required={true}
                  onChange={setDateOfBirth}
                />
              </div>
              <div className="password">
                <InputField
                  placeholder="Enter your password"
                  label="Password"
                  type="password"
                  required={true}
                  onChange={setPassword}
                />
              </div>
            </div>
            <div className="dropdownContainer">
              <DropdownMenu
                options={options}
                label="Business Document"
                onChange={setBusinessType}
                isDropDownOpen={() => {
                  console.log("hey");
                }}
              />
            </div>
          </div>
          <div className="registerBtn1">
            <SplashButton
              text="Proceed"
              isSelect={false}
              isProceed={true}
              onClick={handleRegister}
            />
          </div>
        </div>
      </div>
    </>
  );
}
