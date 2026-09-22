import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h2>Charges</h2>
        <h3 className="text-muted mt-3 fs-5">List of all charges and taxes</h3>
      </div>
      <div className="row p-5 mt-5">
        <div className="row text-center">
          <div className="col">
            <img
              src="media/images/all-image/pricing0.svg"
              style={{ width: "60%" }}
            />
            <h2 className="mt-3">Free equity delivery</h2>
            <p className="text-muted mt-4">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col">
            <img
              src="media/images/all-image/intradayTrades.svg"
              style={{ width: "60%" }}
            />
            <h2 className="mt-3">Intraday and F&O trades</h2>
            <p className="text-muted mt-4">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col">
            <img
              src="media/images/all-image/pricing0.svg"
              style={{ width: "60%" }}
            />
            <h2 className="mt-3">Free direct MF</h2>
            <p className="text-muted mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
