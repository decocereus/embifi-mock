import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    mobileNumber: "",
    businessType: "",
  });

  useEffect(() => {
    // Fetch user data from the backend API
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:5000/dashboard", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData({
            ...userData,
            name: data.name,
            mobileNumber: data.mobileNumber,
            businessType: data.businessType,
          });
          items.push(userData)
        } else if (response.status === 401) {
          // Unauthorized access
          alert("Unauthorized access. Please log in.");
          // Redirect to the login page or perform any other desired actions
          navigate("/login")
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
  }, []);

  const register = () => {
    navigate("/welcome");
  };

  const viewCustomer = () => {
    navigate("/dashboard/viewuser");
  };

  const items = [
    userData
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
