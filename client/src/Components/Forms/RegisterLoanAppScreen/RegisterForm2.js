import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm2.css";
import MobileSignalTimeBar from "../../Common/MobileSignalTimeBar";
import "../../Common/MobileSignalTimeBar.css";
import InputField from "../../Common/InputField";
import "../../Common/InputField.css";
import SplashButton from "../../Common/SplashButton";
import "../../Common/SplashButton.css";
import DropdownMenu from "../../Common/DropdownMenu";

export default function Register() {
  const navigate = useNavigate();
  const backToRegisterForm = () => {
    navigate("/registerform");
  };

  const [loanApp, setLoanApp] = useState({
    businessDocument: "",
    aadharNumber: "",
    buidlingNumber: "",
    pincode: "",
    city: "",
    state: "",
  });
  
  const [dropDownOpen, setDropDownOpen] = useState(false)

  const dropDownIsOpen = dropDownOpen ?  "close" :  "open"

  const setBusinessDocument = (option) => {
    setLoanApp({ ...loanApp, businessDocument: option });
  };
  const setAadharNumber = (e) => {
    setLoanApp({ ...loanApp, aadharNumber: e.target.value });
  };
  const setBuildingNumber = (e) => {
    setLoanApp({ ...loanApp, buidlingNumber: e.target.value });
  };
  const setPincdoe = (e) => {
    setLoanApp({ ...loanApp, pincode: e.target.value });
  };
  const setCity = (e) => {
    setLoanApp({ ...loanApp, city: e.target.value });
  };
  const setState = (e) => {
    setLoanApp({ ...loanApp, state: e.target.value });
  };

  const handleLoanApplication = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/registerformloanapplication",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loanApp),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Loan application registered successfully
        // Reset form fields
        navigate("/viewloanoffers");
      } else {
        // Error occurred while registering loan application
        alert("An error occurred while registering the loan application.");
        //navigate("/");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.log(error);
      //navigate("/");
    }
  };

  const options = ["Udyog AADHAR", "None"];

  return (
    <>
      <div className="globalContainer">
        <div className="registerFormContainer2">
          <div className="mobileTime2">
            <MobileSignalTimeBar />
          </div>
          <div className="backButton">
            <button className="backBtn" onClick={backToRegisterForm}>
              <img src="/assets/arrow_back.png" alt="arrow_back" />
            </button>
          </div>
          <div className="inputFieldsContainer2">
            <div className={"dropdownContainer2 " + dropDownIsOpen}>
              <DropdownMenu
                options={options}
                label="Business Document"
                onChange={setBusinessDocument}
                isDropDownOpen = {setDropDownOpen}
              />
            </div>
            <div className="aadharcardNumber">
              <InputField
                placeholder="Enter your Udyog AADHAR Number"
                label="Udyog AADHAR Number"
                type="text"
                required={true}
                onChange={setAadharNumber}
              />
            </div>
            <div className="fileInputs">
              <InputField
                placeholder="Click here to upload/capture Udyog AADHAR"
                label="Udyog AADHAR"
                type="file"
                required={true}
              />
            </div>

            <div className="fileInputs">
              <InputField
                placeholder="Capture Business Site front photo with a sign board"
                label="Business Site Photo"
                type="file"
                required={true}
              />
            </div>
            <div className="sectionHeading">
              <h1 className="heading">Business Address</h1>
            </div>
            <div className="buildingNumber">
              <InputField
                placeholder="Building Number & Area"
                label="Building Number & Area"
                type="text"
                required={true}
                onChange={setBuildingNumber}
              />
            </div>
            <div className="pincodeTownContainer">
              <div className="pincode">
                <InputField
                  placeholder="Pincode"
                  label="Pincode"
                  type="text"
                  required={true}
                  onChange={setPincdoe}
                />
              </div>
              <div className="town">
                <InputField
                  placeholder="Enter your Town/City"
                  label="Town/City"
                  type="text"
                  required={true}
                  onChange={setCity}
                />
              </div>
            </div>
            <div className="state">
              <InputField
                placeholder="State"
                label="State"
                type="text"
                required={true}
                onChange={setState}
              />
            </div>
          </div>
          <div className="registerBtn2">
            <SplashButton
              text="Proceed"
              isSelect={false}
              isProceed={true}
              onClick={handleLoanApplication}
            />
          </div>
        </div>
      </div>
    </>
  );
}
