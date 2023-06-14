import React from "react";
import {useNavigate} from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import "./UserDetails.css";

export default function UserDetails(user) {
  const navigate = useNavigate();
  const backToDashboard = () => {
    navigate("/dashboard")
  }
  return (
    <>
      <DashboardHeader />
      <div className="tableContainer">
        <button>
        <div className="boundingBox" onClick={backToDashboard}>
          <img className="backarrow" src="/assets/arrow_back.png" alt="arrow_back" />
        </div>
        </button>
        <div className="details">
          <span>Details</span>
        </div>
        <table className="table">
          <tr className="row">
            <td className="columnElement">Full Name</td>
            <td className="rowElement">hey</td>
          </tr>
          <tr className="row">
            <td className="columnElement">Business Type</td>
            <td className="rowElement">hey</td>
          </tr>
          <tr className="row">
            <td className="columnElement">Loan Amount</td>
            <td className="rowElement">hey</td>
          </tr>
          <tr className="row">
            <td className="columnElement">DOB</td>
            <td className="rowElement">hey</td>
          </tr>
          <tr className="row">
            <td className="columnElement">Mobile Number</td>
            <td className="rowElement">hey</td>
          </tr>
        </table>
      </div>
    </>
  );
}
