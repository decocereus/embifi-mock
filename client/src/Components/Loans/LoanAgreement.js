import React, { useState } from "react";
import "./LoanAgreement.css";
import MobileSignalTimeBar from "../Common/MobileSignalTimeBar";
import SplashButton from "../Common/SplashButton";
import ApplicationSuccess from "../Result/ApplicationSuccess";
import ApplicationReject from "../Result/ApplicationReject";

export default function LoanAgreement() {
  const [isChecked, setIsChecked] = useState(false);

  const [showNextScreen, setShowNextScreen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showReject, setShowReject] = useState(false);

  const appValid = false;

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleNextScreen = () => {
    const isSuccess = true;
    if (!isChecked) {
      alert("Please agreen to the terms and conditions");
    } else if (!isSuccess && isChecked) {
      setShowSuccess(false);
      setShowReject(true);
    } else {
      setShowSuccess(true);
      setShowReject(false);
    }
    setShowNextScreen(true);
  };

  return (
    <div className="globalContainer">
      <div className="agreementContainer">
        <div className="mobileTime">
          <MobileSignalTimeBar />
        </div>
        <div className="loanOffersContainer">
          <div className="agreementHeadingContainer">
            <h1 className="agreementHeading">Loan Agreement</h1>
          </div>
          <div className="imageCollection">
            <image
              className="sprinkle1"
              src="/assets/sprinkle1.png"
              alt="sprinkle1"
            />
            <img
              className="sprinkle2"
              src="/assets/sprinkle2.png"
              alt="sprinkle2"
            />
            <img
              className="sprinkle3"
              src="/assets/sprinkle3.png"
              alt="sprinkle3"
            />
            <img className="book" src="/assets/book.png" alt="book" />
          </div>
          <div className="summaryCard">
            <h1 className="summaryHeading">Loan Summary</h1>
            <table className="summaryTable">
              <tr className="row">
                <td className="colHeading">Loan Amount</td>
                <td className="rowInfo">₹ 10,000</td>
              </tr>
              <tr className="row">
                <td className="colHeading">Interest Rate</td>
                <td className="rowInfo">2%</td>
              </tr>
              <tr className="row">
                <td className="colHeading">Processing charges</td>
                <td className="rowInfo">₹ 25</td>
              </tr>
              <tr className="row">
                <td className="colHeading">Upcoming Repayment Date</td>
                <td className="rowInfo">02/08/2022</td>
              </tr>
              <tr className="row">
                <td className="colHeading">Disbursal Amount</td>
                <td className="rowInfo">₹ 10,025</td>
              </tr>
              <tr className="row">
                <td className="colHeading">Total Payback Amount</td>
                <td className="rowInfo">₹ 10,025</td>
              </tr>
            </table>
          </div>
          <div className="userAccountDetailsContainer">
            <h1 className="userAccountDetailsHeading">
              Loan Amount will be deposited to this Account
            </h1>
            <div className="userBankAccountDetailsContainer">
              <h4 className="userAccountName">Mr Manish Singh</h4>
              <h4 className="userAccountNumber">Account No. 272318373448</h4>
              <h4 className="userAccountIFSC">IFSC Code HDFCN0001665</h4>
              <h4 className="userAccountBranch">
                Branch-Green Park, New Delhi, HDFC Bank
              </h4>
            </div>
          </div>
          <div className="temsAndConditionsContiner">
            <input
              className="checkbox"
              type="checkbox"
              onClick={toggleCheckBox}
            />
            <h4 className="termsAndCondtionsHeading">
              I understand and agree to all the{" "}
              <span className="specialTerms">T&C's.</span>
            </h4>
          </div>
          <div className="finalBtn">
            <SplashButton
              text="Accept"
              isisSelect={false}
              isProceed={false}
              onClick={handleNextScreen}
            />
          </div>
          <div className="footerContainer">
            <img className="lock" src="/assets/lock.png" alt="alt" />
            <h3 className="footerContent">Your Information is safe with us.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
