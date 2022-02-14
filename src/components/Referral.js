import React from "react";

const Referral = () => {
  return (
    <React.Fragment>
      <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5">
        <h2 className="title-header">REFERRAL</h2>
        <div className="mycontainer3 mt-2">
          <h6 className="title-footer-dashboard mb-3">
            Your Referral Link: <input type="text" value="..." id="ref-link" />{" "}
            <button className="btn-copy"></button>
          </h6>
          <hr className="my-3" />
          <div className="row">
            <div className="col-6">
              <h6>Referral Earned Available</h6>
              <h6>
                <b id="referral-available">...</b>
              </h6>
            </div>
            <div className="col-6">
              <h6>Total Referral Earned</h6>
              <h6>
                <b id="referral-earned">...</b>
              </h6>
            </div>
            <div className="col-12 my-2"></div>
            <div className="col-6">
              <h6>Total Referral Withdrawn</h6>
              <h6>
                <b id="referral-withdrawn">...</b>
              </h6>
            </div>
            <div className="col-6">
              <h6>Total Referrals</h6>
              <h6>
                <b id="total-referrals">...</b>
              </h6>
            </div>
          </div>
          <hr className="my-3" />
          <div className="col-12">
            <button
              type="button"
              className="btn-secondary mx-auto"
              id="withdraw-referral-btn"
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
              <b>2% from each level 1 referral deposits</b>
              <br />
              <b>1% from each level 2 referral deposits</b>
              <br />
              <b>1% from each level 3 referral deposits</b>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Referral;
