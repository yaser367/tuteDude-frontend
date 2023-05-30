import React from "react";

import "./EarningWidget.scss";

const EarningWidget = () => {
  return (
    <div className="app__widgets">
      <div className="app__widget">
        <div className="widget">
          <h5>Refferal Earnings</h5>
          <p>&#8377;2,500 </p>
        </div>
        <div className="widget">
          <h5>Total Refferals</h5>
          <p>7 </p>
        </div>
        <div className="widget">
          <h5>Wallet Balance</h5>
          <p>&#8377;500 </p>
        </div>
        <div>
          <button>Withdraw Balance</button>
        </div>
      </div>
      <div className="app__referal">
        <h4>Your Refferal Code</h4>
        <div className="referal-code">
          <p>EDCH54</p>
        </div>
      </div>
    </div>
  );
};

export default EarningWidget;
