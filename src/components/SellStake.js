import React from "react";

const SellStake = () => {
  return (
    <React.Fragment>
      <div className="col-lg-4 col-md-12 col-sm-12 text-center">
        <h3 className="title-header mt-2">SELL BUDDYMINT</h3>
        <div className="mycontainer2 mt-1">
          <p>
            Sell the earned tokens <br /> Only 40000 tokens can be sold per day
            Earn BUSD
          </p>
          <hr />
          <div className="row">
            <div className="col-6 my-2">
              <b>Circulation</b>
            </div>
            <div className="col-6 my-2 total-supply">
              <span>
                <b></b>
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
                <b>...</b>
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
                <b>...</b>
              </span>
            </div>
          </div>
          <hr />
          <div className="row my-4">
            <div className="col-12">
              <h5 className="mb-2">BUDDYMINT Price</h5>
            </div>
            <div className="col-12">
              <h5>
                <span id="token-price">
                  <b>...</b>
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
              BUDDYMINT Balance:
              <b>
                {" "}
                <span id="user-token-balance-2">
                  <b>...</b>
                </span>
              </b>
            </h5>
            <div className="col-12">
              <hr className="my-4" />
            </div>
            <div className="mb-4">
              <p>Available for sale</p>
              <div className="row">
                <div className="col-7">
                  <div className="deposit-block">
                    <div className="amount-field">
                      <input
                        type="number"
                        className="amount-input"
                        value="1"
                        min="0"
                        id="input-3"
                      />
                      <button
                        className="amount-field-button"
                        onclick="SetMaxBUSDTokenToSell()"
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
                    onclick="sell('#input-3')"
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
