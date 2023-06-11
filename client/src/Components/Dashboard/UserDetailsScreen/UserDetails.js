import React from "react";
import DashboardHeader from "../DashboardHeader";
import arrow_back from "../../../assets/arrow_back.png";
import "./UserDetails.css";

export default function UserDetails(user) {
  return (
    <>
      <DashboardHeader />
      <div className="tableContainer">
        <button>
        <div className="boundingBox">
          <image className="backarrow" src={arrow_back} alt="arrow_back" />
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
