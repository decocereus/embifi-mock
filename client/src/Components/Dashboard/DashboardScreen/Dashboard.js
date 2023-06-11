import React, { useState } from "react";
import DashboardHeader from "../DashboardHeader";
import "./Dashboard.css";

export default function Dashboard() {
  
    const items = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ];

  return (
    <>
    <DashboardHeader/>
      <div className="register">
        <button className="registerbtn" type="submit">
          Register
        </button>
      </div>

      <div className="userDetailsTableContainer">
        <table className="userDetailsTable">
          <tbody>
            <tr className="headers">
              <th className="headerText">Name</th>
              <th className="headerText">Mobile.No</th>
              <th className="headerText">Business Type</th>
              <th></th>
            </tr>
            {items.map((val, key) => {
              let cName = key % 2 == 0 ? "even" : "odd";
              return (
                <tr key={key} id={cName} className="userDetailRow">
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.gender}</td>
                  <td>
                    <button className="viewDetailsbtn">View</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </>
  );
}
      