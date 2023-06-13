import React from "react";
import LoanCard from "../Common/LoanCard";
import MobileSignalTimeBar from "../Common/MobileSignalTimeBar";
import "./LoanOffers.css";
import SplashButton from "../Common/SplashButton";

export default function LoanOffers() {
  return (
    <>
      <div className="globalContainer">
        <div className="loanOfferContainer">
          <div className="mobileTime">
            <MobileSignalTimeBar />
          </div>
          <div className="loanCardsContainer">
            <LoanCard
              loanAmount="₹ 10,000"
              availableTime="7 Days"
              interestRatePerMonth="2 %"
              totalInterest="₹ 46.67"
              totalAmount="₹ 10,046.7"
            />
            <LoanCard
              loanAmount="₹ 20,000"
              availableTime="15 Days"
              interestRatePerMonth="2 %"
              totalInterest="₹ 46.67"
              totalAmount="₹ 20,046.7"
            />
          </div>
          <div className="dataContainer">
            <div className="headingFigureContainer">
              <div className="headingContainer">
                <label className="loanAmountHeader">Loan Amount</label>
                <label className="chargesHeader">Processing Charges</label>
                <label className="disbursalAmountHeader">
                  Disbursal Amount
                </label>
              </div>
              <div className="amountsContainer">
                <label className="loanAmountFigure">₹ 10,000</label>
                <label className="chargesFigure">₹ 25</label>
                <label className="disbursalAmountFigure">₹ 9975</label>
              </div>
            </div>
            <div className="dateDueAmountContainer">
              <div className="dueDateAmountHeadingContainer">
                <label className="dueDateHeader">Due Date</label>
                <label className="dueAmountHeader">Due Amount</label>
                <label className="emptyHeader"></label>
              </div>
              <div className="dueAmountsContainer">
                <label className="amountDateFigure">12th Aug</label>
                <label className="totalChargeFigure">₹ 10,046.7</label>
                <label className="emptyFigure"></label>
              </div>
            </div>
          </div>
          <div className="appSubmitBtn">
            <SplashButton text = "Submit" isisSelect = {false} isProceed = {false}/>
          </div>
        </div>
      </div>
    </>
  );
}
