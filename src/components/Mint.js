import React, { useState } from "react";
import { ethers } from "ethers";

import ABI from "../utils/abi.json";
import BUSDABI from "../utils/busd.json";

const Mint = ({
  account: { web3Provider, signer, address },
  contractAddress,
  userBscStaked,
  contractBUSDBalance,
  userUnclaimTokenMinting,
  bscBalance,
}) => {
  const bscAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  const [minimumBusd, setMinimumBusd] = useState("30");
  const [amountToInvest, setAmountToInvest ] = useState("30");
  const addressZero = "0x0000000000000000000000000000000000000000";

  const handleAmountToInvest = (e) => {
    const value = e.target.value;
    if (+value < 30) {
      setAmountToInvest(30);
    }
    setAmountToInvest(value);
  }

  const handleMinimumValue = (e) => {
    const value = e.target.value;
    if (+value < 30) {
      setMinimumBusd(30);
    }
    setMinimumBusd(value);
  };

  const claimTokensMinted = async () => {
    const buddyContract = new ethers.Contract(
      contractAddress,
      ABI,
      web3Provider
    );
    try {
      await buddyContract.connect(signer).claimToken_M();
      alert("Minted token claimed");
    } catch (error) {
      alert(`There was an error : ${error.message}`);
    }
  };

  const approveBUSD = async () => {
    try {
      const bscContract = new ethers.Contract(
        bscAddress,
        BUSDABI,
        web3Provider
      );
      await bscContract
        .connect(signer)
        .approve(contractAddress, ethers.utils.parseEther(minimumBusd));
      alert(
        `Approval granted to BuddyMint contract to spend funds on behalf of ${address}`
      );
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const stakeBUSDToInvest = async () => {
    if ( amountToInvest < "30"){
      alert("The minimum stake of BUSD is 30 $BUSD");
      return;
    }
    const contract = new ethers.Contract(contractAddress, ABI, web3Provider );
    try {
      await contract.connect(signer).stakeBUSD(addressZero, ethers.utils.parseEther(amountToInvest));
      alert("BSC token staked");
    } catch (error) {
    
      alert(`There was an error please try again. ${error.message}`)
    }
   
   }
  

  return (
    <React.Fragment>
      <div className="col-lg-4 col-md-12 col-sm-12 text-center mint">
        <h3 className="title-header mt-2">MINT BUDDYMINT</h3>
        <div className="mycontainer2 mt-1">
          <p>
            Mint BUDDYMINT by staking your BUSD You can stake as many times as
            you want You cannot unstake this BUSD
          </p>
          <hr />
          <div className="row">
            <div className="col-6 my-2">
              <b>APR</b>
            </div>
            <div className="col-6 my-2" id="APY_M">
              <span>
                <b></b>
              </span>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6 my-2">
              <b>Stake</b>
            </div>
            <div className="col-6 my-2" id="user-BUSD-staked">
              <span>
                <b>{userBscStaked ? `${userBscStaked} $BUSD` : "..."}</b>
              </span>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6 my-2">
              <b>Staked</b>
            </div>
            <div className="col-6 my-2" id="total-BUSD-staked">
              <span>
                <b>
                  {contractBUSDBalance ? `${contractBUSDBalance} $BUSD` : "..."}
                </b>
              </span>
            </div>
          </div>
          <hr />
          <div className="row my-3">
            <div className="col-12">
              <h5 className="mb-2">BUDDYMINT Earned</h5>
            </div>
            <div className="col-12">
              <h5>
                <span id="user-unClaimed-M">
                  <b>
                    {userUnclaimTokenMinting ? userUnclaimTokenMinting : "..."}
                  </b>
                </span>
              </h5>
            </div>
          </div>
          <hr />
          <div className="col-12 my-4">
            <button
              type="button"
              className="btn-secondary mx-auto"
              id="claimMButton"
              onClick={claimTokensMinted}
            >
              Claim
            </button>
          </div>
          <hr className="my-3" />
          <div className="row justify-content-center">
            <h5 className="mb-3 mt-2">
              <b>BUSD</b> Balance:
              <b>
                {" "}
                <span id="user-BUSD-balance-1">
                  <b>{bscBalance ? `${bscBalance}` : "..."}</b>
                </span>
              </b>
            </h5>
            <div className="col-12">
              <hr className="my-2" />
            </div>
            <p id="minInvest"> Minimum deposit 30 BUSD</p>
            <div className="col-7">
              <div className="amount-field">
                <input
                  type="number"
                  className="amount-input"
                  min="30"
                  id="input-approve"
                  value={minimumBusd}
                  onChange={handleMinimumValue}
                />
                <button
                  className="amount-field-button"
                  onClick={()=>setMinimumBusd(bscBalance)}
                >
                  Max
                </button>
              </div>
            </div>
            <div className="col-5 d-flex">
              <span>
                <button
                  type="button"
                  className="btnprimary"
                  id="approveButton"
                  onClick={approveBUSD}
                >
                  Approve
                </button>
              </span>
            </div>
            <div className="col-7 mt-3 d-flex">
              <div className="deposit-block">
                <div className="amount-field">
                  <input
                    type="number"
                    className="amount-input"
                    value={amountToInvest}
                    min="30"
                    id="input-busd"
                    onChange={handleAmountToInvest}
                  />
                  <span>
                    <button
                      className="amount-field-button"
                      id="maxAmountButton"
                    >
                      Max
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-5 mt-3 d-flex">
              <span>
                <button
                  type="button"
                  className="btnprimary"
                  id="investButton"
                  onClick={stakeBUSDToInvest}
                >
                  Invest
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Mint;
