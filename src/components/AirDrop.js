import React from "react";
import { ethers } from "ethers";
import ABI from "../utils/abi.json";

const AirDrop = ({
  account: { web3Provider, signer, address },
  contractAddress,
  availableForAirDrop,
  userBscStaked,
  totalReferral,
  timeToNextAirDrop,
}) => {
  const splitAndAdd = (string) => {
    let splitString = string.split(",");
    let total = +splitString[0] + +splitString[1] + +splitString[2];
    return total;
  };

  const claimAirDrop = async () => {
    try {
      const contract = new ethers.Contract(contractAddress, ABI, web3Provider);
      await contract.connect(signer).claimAirdrop();
      alert("Airdrop claimed");
    } catch (error) {
      alert(`There was an error : ${error.message}`);
    }
  };

  return (
    <React.Fragment>
      <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5">
        <h2 className="title-header">AIRDROP</h2>
        <div className="mycontainer3 mt-2">
          Complete the challenges to get airdrop
          <br /> You can receive 100 BDMT TOKEN every 7 days
          <hr className="my-3" />
          <div className="row">
            <div className="col-lg-4" id="airdrop-c-1">
              Have at least <b>100</b> BUSD in Stake
              <span>
                <br /> {userBscStaked > 100 ? <>&#9989;</> : "❌"}
              </span>
            </div>
            <div className="col-lg-4" id="airdrop-c-2">
              7 days since the last airdrop claim
              <span>
                <br />❌
              </span>
            </div>
            <div className="col-lg-4" id="airdrop-c-3">
              Have 5 <br /> more referrals
              <span>
                <br /> {splitAndAdd(totalReferral) > 5 ? <>&#9989;</> : "❌"}
               
              </span>
            </div>
            <div className="col-12 my-3">
              <hr />
            </div>
            <div className="col-8">
              <h4>Available for Airdrop</h4>
            </div>
            <div className="col-4">
              <h4>
                <span id="available-airdrop">
                  <b>{availableForAirDrop}</b>
                </span>
              </h4>
            </div>
            <div className="col-12">
              <hr className="my-3" />
            </div>
            <div className="col-12">
              <button
                type="button"
                className="btn-secondary"
                id="claimAButton"
                onClick={claimAirDrop}
              >
                Claim
              </button>
            </div>
            <div className="col-12">
              <hr className="my-3 " />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AirDrop;
