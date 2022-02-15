import React, { useState } from "react";
import { ethers } from "ethers";

import ABI from "../utils/abi.json";

const dateConverter = (secs) => {
  var sec_num = parseInt(secs, 10);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor(sec_num / 60) % 60;
  var seconds = sec_num % 60;

  return [hours, minutes, seconds]
    .map((v) => (v < 10 ? "0" + v : v))
    .filter((v, i) => v !== "00" || i > 0)
    .join(":");

  //const dateSplit = result.split(":");
  //return `${dateSplit[0]}D:${dateSplit[1]}H:${dateSplit[2]}M`
};

const SellStake = ({
  account: { web3Provider, signer, address },
  contractAddress,
  circulatingSupply,
  availableSupply,
  getTimeToNextDay,
  tokenPrice,
  buddyTokenBalance,
  totalAvailableToSell,
  totalSupply,
}) => {
  const [tokenToSell, setTokenToSell] = useState("1");

  const handleTokenToSell = (e) => {
    const value = e.target.value;
    setTokenToSell(value);
  };

  const sellBuddyToken = async () => {
    const contract = new ethers.Contract(contractAddress, ABI, web3Provider);
    try {
      await contract
        .connect(signer)
        .sellToken(ethers.utils.parseEther(tokenToSell));
      alert("Token sold");
    } catch (error) {
      alert(`There was an error please try again. ${error.data.message}`);
    }
  };

  return (
    <React.Fragment>
      <div className="col-lg-4 col-md-12 col-sm-12 text-center">
        <h3 className="title-header mt-2">SELL BDMT TOKEN</h3>
        <div className="mycontainer2 mt-1">
          <p>
            Sell the earned tokens <br /> Only 40000 tokens can be sold per day
            Earn BUSD
          </p>
          <hr />
          <div className="row">
            <div className="col-6 my-2">
              <b>Circulation supply</b>
            </div>
            <div className="col-6 my-2 total-supply">
              <span>
                <b>{totalSupply}</b>
              </span>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6 my-2">
              <b>Available</b>
            </div>
            <div className="col-6 my-2 available-supply">
              <span>
                <b>{availableSupply}</b>
              </span>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6 my-2">
              <b>Available for sale</b>
            </div>
            <div className="col-6 my-2 available-supply">
              <span>
                <b>{totalAvailableToSell}</b>
              </span>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6 my-2">
              <b>Reset sell</b>
            </div>
            <div className="col-6 my-2" id="time-tonextday">
              <span>
                <b>{dateConverter(getTimeToNextDay)}</b>
              </span>
            </div>
          </div>
          <hr />
          <div className="row my-4">
            <div className="col-12">
              <h5 className="mb-2">BDMT TOKEN Price</h5>
            </div>
            <div className="col-12">
              <h5>
                <span id="token-price">
                  <b>{tokenPrice}</b>
                </span>
              </h5>
            </div>
          </div>
          <hr />
          <div className="row my-4">
            <div className="col-6 d-flex justify-content-end">
              <b>
                <h6>You will get:</h6>
              </b>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <h5 id="sell-calc">
                <b>0.00</b>
              </h5>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row d-flex justify-content-center">
            <h5 className="my-3">
              BDMT TOKEN Balance: &nbsp;&nbsp;
              <b>
                <span id="user-token-balance-2">
                  <b>{buddyTokenBalance}</b>
                </span>
              </b>
            </h5>

            <div className="col-12">
              <hr className="my-4" />
            </div>
            <div className="mb-4">
              <div className="row">
                <div className="col-7">
                  <div className="deposit-block">
                    <div className="amount-field">
                      <input
                        type="number"
                        className="amount-input"
                        value={tokenToSell}
                        min="0"
                        id="input-3"
                        onChange={handleTokenToSell}
                      />
                      <button
                        className="amount-field-button"
                        onClick={() => setTokenToSell(buddyTokenBalance)}
                      >
                        Max
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <button
                    type="button"
                    className="btnprimary"
                    id="sellButton"
                    onClick={sellBuddyToken}
                  >
                    Sell
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SellStake;
