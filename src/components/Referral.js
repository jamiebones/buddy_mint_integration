import React from "react";
import copyImage from "../copy.png";
import { ethers } from "ethers";
import ABI from "../utils/abi.json";


const Referral = ({
  account: { web3Provider, signer, address },
  contractAddress,
  referralWithdrawn,
  referralTotalBonus,
  referralBonus,
  totalReferral,
}) => {
  const copyURL = (text) => {
    navigator.clipboard.writeText(text);
    alert("Referral link copied!");
  };

  const splitAndAdd = (string) => {
    let splitString = string.split(",");
    let total = +splitString[0] + +splitString[1] + +splitString[2];
    return total;
  };

  const withDrawBonus = async () => {
    try {
      const contract = new ethers.Contract(
        contractAddress,
        ABI,
        web3Provider
      );
      await contract.connect(signer).withdrawRef();
      alert("Bonus withdrawn");
    } catch (error) {
      alert(`There was an error : ${error.data.message}`);
    }
  };

  return (
    <React.Fragment>
      <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5">
        <h2 className="title-header">REFERRAL</h2>
        <div className="mycontainer3 mt-2">
          <h6 className="title-footer-dashboard mb-3">
            Your Referral Link:{" "}
            <input
              type="text"
              readOnly
              value={`${window.location.host}?ref=${address}`}
              id="ref-link"
            />
            <button
              className="btn-copy"
              onClick={() => copyURL(`https://${window.location.host}?ref=${address}`)}
            >
              <img src={copyImage} />
            </button>
          </h6>
          <p></p>
          <hr className="my-3" />
          <div className="row">
            <div className="col-6">
              <h6>Referral Earned Available</h6>
              <h6>
                <b id="referral-available">{referralBonus}</b>
              </h6>
            </div>
            <div className="col-6">
              <h6>Total Referral Earned</h6>
              <h6>
                <b id="referral-earned">{referralTotalBonus}</b>
              </h6>
            </div>
            <div className="col-12 my-2"></div>
            <div className="col-6">
              <h6>Total Referral Withdrawn</h6>
              <h6>
                <b id="referral-withdrawn">{referralWithdrawn}</b>
              </h6>
            </div>
            <div className="col-6">
              <h6>Total Referrals</h6>
              <h6>
                <b id="total-referrals">{splitAndAdd(totalReferral)}</b>
              </h6>
            </div>
          </div>
          <hr className="my-3" />
          <div className="col-12">
            <button
              type="button"
              className="btn-secondary mx-auto"
              id="withdraw-referral-btn"
              onClick={withDrawBonus}
            >
              Withdraw
            </button>
          </div>
          <hr className="my-3" />
          <div className="row my-3">
            <div className="col-12">
              <b>
                <h5 className="mb-3">Earn BUSD for promotion:</h5>
              </b>
              <b>4% from each level 1 referral deposits</b>
              <br />
              <b>3% from each level 2 referral deposits</b>
              <br />
              <b>2% from each level 3 referral deposits</b>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Referral;
