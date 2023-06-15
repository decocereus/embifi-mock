import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  // const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const token = localStorage.getItem('token');
  //   try {
  //     const response = await fetch('http://localhost:5000/dashboard', {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // Replace with your JWT token
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error('Request failed with status ' + response.status);
  //     }
  //     const data = await response.json();
  //     setUserData(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const register = () => {
    navigate("/welcome");
  };

  const viewCustomer = () => {
    navigate("/dashboard/viewuser");
  };

  const items = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ];

  return (
    <>
      <div className="dashboardGlobalContainer">
        <div className="dashboardHeader">
          <DashboardHeader />
        </div>
        <div className="userDetailsTableBtnContainer">
          <div className="register">
            <button className="registerbtn" onClick={register}>
              Register
            </button>
          </div>
          <table className="userDetailsTable">
            <tr className="headers">
              <th className="headerText">Name</th>
              <th className="headerText">Mobile.No</th>
              <th className="headerText">Business Type</th>
              <th></th>
            </tr>
            {items.map((user, key) => {
              let cName = key % 2 == 0 ? "even" : "odd";
              return (
                <tr key={key} id={cName} className="userDetailRow">
                  <td>{user.name}</td>
                  <td>{user.mobileNumber ? user.mobileNumber : "-"}</td>
                  <td>{user.businessType ? user.businessType : "-"}</td>
                  <td>
                    <button className="viewDetailsbtn" onClick={viewCustomer}>
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}
