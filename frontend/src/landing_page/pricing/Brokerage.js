import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <ul style={{textAlign : "left", lineHeight : "2.5"}} className="text-muted fs-6">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of 50 +GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged 20rs per contract note. Courier charges apply.
            </li>
            <li>
              If the account is in debit balance, any order placed will be charges 50rs per executed order insted of 20rs per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
