import React from "react";

const Price = () => {
  return (
    <React.Fragment>
      <div className="col-lg-6 col-md-12 col-sm-12 text-center">
        <h6>
          <b>
            FIREBUSD PRICE :{" "}
            <span id="token-priceM">
              <b>0.00</b>
            </span>
          </b>
        </h6>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 text-center">
        <h6>
          <b>
            TOTAL USER :{" "}
            <span id="totalUsers">
              <b>0.00</b>
            </span>
          </b>
        </h6>
      </div>
      <div className="col-12">
        <hr className="mb-4 mt-4 " />
      </div>
    </React.Fragment>
  );
};

export default Price;
