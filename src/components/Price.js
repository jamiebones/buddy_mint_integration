import React from "react";

const Price = ({ tokenPrice }) => {
  return (
    <React.Fragment>
      <div className="col-lg-6 col-md-12 col-sm-12 text-center">
        <h6>
          <b>
            BDMT TOKEN PRICE :
            <span id="token-priceM">
              {" "}
              &nbsp;&nbsp;
              <b>${tokenPrice ? tokenPrice : "0.00"}</b>
            </span>
          </b>
        </h6>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 text-center"></div>
      <div className="col-12">
        <hr className="mb-4 mt-4 " />
      </div>
    </React.Fragment>
  );
};

export default Price;
