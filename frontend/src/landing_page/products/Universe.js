import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h2>The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\all-image\zerodhaFundhouse.png"
            style={{ width: "50%" }}
          />
          <p className="text-muted fs-12">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\all-image\sensibullLogo.svg"
            style={{ width: "50%" }}
          />
          <p className="text-muted fs-12">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\all-image\smallcaseLogo.png"
            style={{ width: "50%" }}
          />
          <p className="text-muted fs-12">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\all-image\dittoLogo.png"
            style={{ width: "30%" }}
          />
          <p className="text-muted  fs-12">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\all-image\streakLogo.png"
            style={{ width: "40%" }}
          />
          <p className="text-muted fs-12">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/all-image/goldenpiLogo.png" style={{ width: "40%" }}/>
          <p className="text-muted fs-12">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{width : "20%", margin: "0 auto"}}>Signup for free</button>
      </div>
    </div>
  );
}

export default Universe;
