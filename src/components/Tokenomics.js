import React from "react";

const Tokenomics = () => {
  return (
    <React.Fragment>
      <section
        id="token"
        className="iq-Tranding-platform light-bg overview-block-ptb mt-5"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="heading-title">
                <h2 className="title iq-tw-6">Tokenomics</h2>
                <p>
                  {" "}
                  Use BUSD to earn BUDDYMINT Tokens to stake (or sell for BUSD)
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title2">
                <small className="iq-font-green">Token Information</small>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Token Name:</td>
                      <td>BUDDYMINT</td>
                    </tr>
                    <tr>
                      <td>Token Symbole:</td>
                      <td>BUDDYMINT</td>
                    </tr>
                    <tr>
                      <td>Network:</td>
                      <td>Binance Smart Chain (BSC)</td>
                    </tr>
                    <tr>
                      <td>Token Standard:</td>
                      <td>BEP20</td>
                    </tr>
                    <tr>
                      <td>Total Supply:</td>
                      <td id="limit-supply">1,000,000</td>
                    </tr>
                    <tr>
                      <td>Circulation Supply:</td>
                      <td className="total-supply">...</td>
                    </tr>
                    <tr>
                      <td>Available Supply:</td>
                      <td className="available-supply">...</td>
                    </tr>
                    <tr>
                      <td>Contract:</td>
                      <td>
                        <a
                          href="https://bscscan.com/address/0x08aF0ecc3B8194809730bA7013C637c7e16D2f9c"
                          target="_blank"
                        >
                          0x08aF0ecc3B8194809730bA7013C637c7e16D2f9c
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-12">
              <p>
                <span className="orange">Note:</span> Basically theese fees are
                useful to support and make our project better day by day
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Tokenomics;
