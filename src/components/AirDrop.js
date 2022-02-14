import React from "react";

const AirDrop = () => {
  return (
    <React.Fragment>
      <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5">
        <h2 className="title-header">AIRDROP</h2>
        <div className="mycontainer3 mt-2">
          Complete the challenges to get airdrop
          <br /> You can receive 100 FIREBUSD every 7 days
          <hr className="my-3" />
          <div className="row">
            <div className="col-lg-4" id="airdrop-c-1">
              Have at least <b>...</b> BUSD in Stake
              <span>
                <br />❌
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
                <br />❌
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
                  <b>0</b>
                </span>
              </h4>
            </div>
            <div className="col-12">
              <hr className="my-3" />
            </div>
            <div className="col-12">
              <button type="button" className="btn-secondary" id="claimAButton">
                Claim
              </button>
            </div>
            <div className="col-12">
              <hr className="my-3 " />
            </div>
            <div className="col-12 my-3">
              <h6> In the coming days there will be many giveaway</h6>
              <h6 className="mt-2">
                first giveaway can be found on the{" "}
                <a href="https://t.me/FireBusdGiveaways">@FireBusdGiveaway</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AirDrop;
