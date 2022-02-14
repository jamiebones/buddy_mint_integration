import React from "react";

const trimAddress = (address) => {
  const firstpart = address.slice(0, 4);
  const midpart = "....";
  const endpart = address.slice(address.length - 4, address.length);
  return `${firstpart}${midpart}${endpart}`;
};

const Navbar = ({ connect, disconnect, provider, web3Provider, address }) => {
  return (
    <section className="first-screen">
      <header className="py-2">
        <nav className="navbar navbar-expand-lg mt-1">
          <a href="index-2.html#">
            <div className="logo">
              <img
                src="assets/images/firebusd-logo-header-transparent.png"
                style={{ width: 200 + "px", height: 212 + "px" }}
                alt="logo"
              />
            </div>
          </a>
          <button
            className="navbar-toggler mr-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon menu"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto text-center navMI">
              <li className="nav-item active btnHeader">
                <a href="assets/WhitePaper.pdf" target="_blank">
                  <button
                    style={{ cursor: "pointer" }}
                    type="button"
                    title="Whitepaper"
                    className="btnprimary"
                  >
                    <span>WhitePaper</span>
                  </button>
                </a>
              </li>
              <li className="nav-item btnHeader">
                <button
                  style={{ cursor: "pointer" }}
                  type="button"
                  id="contractLink"
                  title="SmartContract"
                  className="btnprimary tel"
                >
                  <span>SmartContract</span>
                </button>
              </li>
            
              <li className="nav-item btnHeader marginL">
                <button
                  style={{ cursor: "pointer" }}
                  type="button"
                  title="FAQ"
                  className="btnprimary faq-btn tel"
                >
                  <span>FAQ</span>
                </button>
              </li>
            </ul>
            <div className="navMI py-2">
              {web3Provider ? (
                  <button
                  style={{ cursor: "pointer" }}
                  type="button"
                  className="btn-terzo connect mx-auto"
                  id="disconnect-btn"
                  onClick={disconnect}
                >
                  <span>{trimAddress(address)}</span>
                </button>
              ) : (
                <button
                  style={{ cursor: "pointer" }}
                  type="button"
                  className="btnprimary connect mx-auto"
                  id="connect-btn"
                  onClick={connect}
                >
                  <span>Connect +</span>
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
