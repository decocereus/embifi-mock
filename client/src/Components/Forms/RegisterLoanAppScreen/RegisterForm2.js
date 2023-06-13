import React from "react";
import "./RegisterForm2.css";
import MobileSignalTimeBar from "../../Common/MobileSignalTimeBar";
import "../../Common/MobileSignalTimeBar.css";
import InputField from "../../Common/InputField";
import "../../Common/InputField.css";
import SplashButton from "../../Common/SplashButton";
import "../../Common/SplashButton.css";
import DropdownMenu from "../../Common/DropdownMenu";
import arrow_back from "../../../assets/arrow_back.png";

export default function Register() {
  const options = ["Udyog AADHAR", "None"];

  return (
    <>
      <div className="globalContainer">
        <div className="registerFormContainer2">
          <div className="mobileTime2">
            <MobileSignalTimeBar />
          </div>
          <div className="backButton">
            <button className="backBtn">
              <image src={arrow_back} alt="arrow_back" />
            </button>
          </div>
          <div className="inputFieldsContainer2">
            <div className="dropdownContainer2">
              <DropdownMenu options={options} label="Business Document" />
            </div>
            <div className="aadharcardNumber">
              <InputField
                placeholder="Enter your Udyog AADHAR Number"
                label="Udyog AADHAR Number"
                type="text"
                required={true}
              />
            </div>
            <div className="fileInputs">
              <InputField
                placeholder="Click here to upload/capture Udyog AADHAR"
                label="Udyog AADHAR"
                type="picture"
                required={true}
              />
            </div>

            <div className="fileInputs">
              <InputField
                placeholder="Capture Business Site front photo with a sign board"
                label="Business Site Photo"
                type="picture"
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
              />
            </div>
            <div className="pincodeTownContainer">
              <div className="pincode">
                <InputField
                  placeholder="Pincode"
                  label="Pincode"
                  type="text"
                  required={true}
                />
              </div>
              <div className="town">
                <InputField
                  placeholder="Enter your Town/City"
                  label="Town/City"
                  type="text"
                  required={true}
                />
              </div>
            </div>
            <div className="state">
              <InputField
                placeholder="State"
                label="State"
                type="text"
                required={true}
              />
            </div>
          </div>
          <div className="registerBtn2">
            <SplashButton text="Proceed" isSelect = {false} isProceed = {true} />
          </div>
        </div>
      </div>
    </>
  );
}
