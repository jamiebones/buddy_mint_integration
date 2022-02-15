import React, { useState } from "react";
import { ethers } from "ethers";

import ABI from "../utils/abi.json";

const Stake = ({
  account: { web3Provider, signer, address },
  mybuddyStake,
  totalStakedToken,
  userUnclaimTokenStake,
  contractAddress,
  userTokenBalance,
  apyStaked,
}) => {
  const addressZero = "0x0000000000000000000000000000000000000000";
  const [amountToStake, setAmountToStake] = useState("1");

  const claimBuddyTokensStaked = async () => {
    const contract = new ethers.Contract(contractAddress, ABI, web3Provider);
    try {
      await contract.connect(signer).claimToken_T();
      alert("Staked token claimed");
    } catch (error) {
      alert(`There was an error : ${error.message}`);
    }
  };

  const unstackedToken = async () => {
    const contract = new ethers.Contract(contractAddress, ABI, web3Provider);
    try {
      await contract.connect(signer).unStakeToken();
      alert("Buddy token unstaked");
    } catch (error) {
      console.log(error);
      alert(`There was an error please try again. ${error.message}`);
    }
  };

  const stakeBuddyToken = async () => {
    const contract = new ethers.Contract(contractAddress, ABI, web3Provider);
    try {
      await contract
        .connect(signer)
        .stakeToken(ethers.utils.parseEther(amountToStake));
      alert("Token staked token");
    } catch (error) {
      alert(`There was an error please try again. ${error.message}`);
    }
  };

  return (
    <React.Fragment>
      <div className="col-lg-4 col-md-12 col-sm-12 text-center">
        <h3 className="title-header mt-2">STAKE BDMT TOKEN</h3>
        <div className="mycontainer2 mt-1">
          <p>
            Stake BDMT TOKEN to earn it You can stake as many times as you want
            You can unstake this BDMT TOKEN after 7 days
          </p>
          <hr />
          <div className="row">
            <div className="col-6 my-2">
              <b>APR</b>
            </div>
            <div className="col-6 my-2" id="APY_T">
              <span>
                <b>{apyStaked}%</b>
              </span>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6 my-2">
              <b>My Stake</b>
            </div>
            <div className="col-6 my-2" id="user-token-staked">
              <span>
                <b>{mybuddyStake}</b>
              </span>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6 my-2">
              <b>Total Staked</b>
            </div>
            <div className="col-6 my-2" id="total-token-staked">
              <span>
                <b>{totalStakedToken}</b>
              </span>
            </div>
          </div>
          <hr />
          <div className="row my-3">
            <div className="col-12">
              <h5 className="mb-2">BDMT TOKEN Earned</h5>
            </div>
            <div className="col-12">
              <h5>
                <span id="user-unClaimed-T">
                  <b>{userUnclaimTokenStake ? userUnclaimTokenStake : "..."}</b>
                </span>
              </h5>
            </div>
          </div>
          <hr />
          <div className="col-12 my-2" id="time-tounstake">
            <p>
              <span>
                <b>There is no minimum to stake</b>
              </span>
            </p>
          </div>
          <hr />
          <div className="row my-4">
            <div className="col-6 d-flex justify-content-end">
              <button
                type="button"
                className="btnprimary"
                id="claimTButton"
                onClick={claimBuddyTokensStaked}
              >
                Claim
              </button>
            </div>
            <div className="col-6 d-flex justify-content-start">
              <button
                type="button"
                className="btn-special"
                id="unstakeButton"
                onClick={unstackedToken}
              >
                Unstake
              </button>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row d-flex justify-content-center">
            <h5 className="my-1">
              BDMT TOKEN Balance:
              <b>
                <span id="user-token-balance-1">
                  &nbsp;&nbsp;
                  <b>{userTokenBalance}</b>
                </span>
              </b>
            </h5>
            <div className="col-12">
              <hr className="my-4" />
            </div>
            <div>
              <p>There is no minimum to stake</p>
              <div className="row">
                <div className="col-7">
                  <div className="deposit-block">
                    <div className="amount-field">
                      <input
                        type="number"
                        className="amount-input"
                        value={amountToStake}
                        min="0"
                        id="input-2"
                        onChange={(e) => setAmountToStake(e.target.value)}
                      />
                      <span>
                        <button
                          className="amount-field-button"
                          id="maxAmountButton"
                          onClick={() => setAmountToStake(userTokenBalance)}
                        >
                          Max
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <span>
                    <button
                      type="button"
                      className="btnprimary"
                      id="stakeButton"
                      onClick={stakeBuddyToken}
                    >
                      Stake
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Stake;
