import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import "./UserDetails.css";

export default function UserDetails(user) {
  const navigate = useNavigate();
  const backToDashboard = () => {
    navigate("/dashboard");
  };
  const [userData, setUserData] = useState({
    name: "",
    businessType: "",
    loanAmount: "X",
    dateOfBirth: "",
    mobileNumber: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          "http://localhost:5000/dashboard/viewuser",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUserData({
            ...userData,
            name: data.name,
            businessType: data.businessType,
            loanAmount: data.loanAmount,
            dateOfBirth: data.dateOfBirth,
            mobileNumber: data.mobileNumber,
          });
        } else if (response.status === 401) {
          // Unauthorized access
          alert("Unauthorized access. Please log in.");
          // Redirect to the login page or perform any other desired actions
          navigate("/login");
        } else {
          // Other error occurred
          alert("An error occurred. Please try again later.");
        }
      } catch (error) {
        console.log(error);
        alert("An error occurred. Please try again later.");
      }
    };
    fetchUserData();
    console.log(userData);
  }, []);

  return (
    <>
      <DashboardHeader />
      <div className="tableContainer">
        <button>
          <div className="boundingBox" onClick={backToDashboard}>
            <img
              className="backarrow"
              src="/assets/arrow_back.png"
              alt="arrow_back"
            />
          </div>
        </button>
        <div className="tableAndHeadingContainer">
          <div className="details">
            <h1>Details</h1>
          </div>
          <div className="tableElementContainer">
            <table className="table">
              <tr className="row">
                <td className="columnElement">Full Name</td>
                <td className="rowElement">{userData.name}</td>
              </tr>
              <tr className="row">
                <td className="columnElement">Business Type</td>
                <td className="rowElement">{userData.businessType}</td>
              </tr>
              <tr className="row">
                <td className="columnElement">Loan Amount</td>
                <td className="rowElement">{"₹ "+ userData.loanAmount}</td>
              </tr>
              <tr className="row">
                <td className="columnElement">DOB</td>
                <td className="rowElement">{userData.dateOfBirth}</td>
              </tr>
              <tr className="row">
                <td className="columnElement">Mobile Number</td>
                <td className="rowElement">{userData.mobileNumber}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
