import React from "react";

const Stake = () => {
  return (
    <React.Fragment>
      <div className="col-lg-4 col-md-12 col-sm-12 text-center">
        <h3 className="title-header mt-2">STAKE BUDDYMINT</h3>
        <div className="mycontainer2 mt-1">
          <p>
      
            Stake BUDDYMINT to earn it You can stake as many times as you want
            You can unstake this BUDDYMINT after 7 days
          </p>
          <hr />
          <div className="row">
            <div className="col-6 my-2">
              <b>APR</b>
            </div>
            <div className="col-6 my-2" id="APY_T">
              <span>
                <b>...</b>
              </span>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6 my-2">
              <b>Stake</b>
            </div>
            <div className="col-6 my-2" id="user-token-staked">
              <span>
                <b>...</b>
              </span>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6 my-2">
              <b>Staked</b>
            </div>
            <div className="col-6 my-2" id="total-token-staked">
              <span>
                <b>...</b>
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
                <span id="user-unClaimed-T">
                  <b>...</b>
                </span>
              </h5>
            </div>
          </div>
          <hr />
          <div className="col-12 my-2" id="time-tounstake">
            <p>
              <span>
                <b>...</b>
              </span>
            </p>
          </div>
          <hr />
          <div className="row my-4">
            <div className="col-6 d-flex justify-content-end">
              <button type="button" className="btnprimary" id="claimTButton">
                Claim
              </button>
            </div>
            <div className="col-6 d-flex justify-content-start">
              <button type="button" className="btn-special" id="unstakeButton">
                Unstake
              </button>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row d-flex justify-content-center">
            <h5 className="my-1">
              BUDDYMINT Balance:
              <b>
                {" "}
                <span id="user-token-balance-1">
                  <b>...</b>
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
                        value="1"
                        min="0"
                        id="input-2"
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
                <div className="col-5">
                  <span>
                    <button
                      type="button"
                      className="btnprimary"
                      id="stakeButton"
                     
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
