import React from "react";
import SplashButton from "./SplashButton";
import "./SplashButton.css"
import "./LoanCard.css";

export default function LoanCard(props) {
  return (
    <div className="loanCardContainer">
      <div className="loanAmountAndTimeContainer">
        <h1 className="loanAmount">{props.loanAmount}</h1>
        <h1 className="availableTime">{props.availableTime}</h1>
      </div>
      <h1 className="interestRate">
        {props.interestRatePerMonth + " Interest Per Month"}
      </h1>
      <div className="loanInfoContainer">
        <div className="loanInfoAmount">
          <h4 className="totalInterest">{props.totalInterest}</h4>
          <h4 className="totalInterestText">Total Interest</h4>
        </div>
        <div className="loanInfoText">
          <h4 className="totalAmount">{props.totalAmount}</h4>
          <h4 className="totalAmountText">Principal + Interest</h4>
        </div>
      </div>
      <div className="selectBtn">
        <SplashButton text="Select" isSelect = {true} isProceed = {false} />
      </div>
    </div>
  );
}
