import React from "react";

export const Header = () => {
  return (
    <div className="frame">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="group" alt="Group" src="group.png" />
          <img className="rectangle" alt="Rectangle" src="rectangle-1.svg" />
          <div className="text-wrapper-2">Hi!</div>
          <div className="transactions">Transactions</div>
          <div className="your-balance-is">Your Balance Is</div>
          <div className="text-wrapper-3">$15,615</div>
          <div className="div-2">
            <div className="home-indicator" />
            <div className="overlap-2">
            </div>
            <div className="overlap-3">
            </div>
            <div className="ellipse-3" />
            <div className="text-wrapper-4">Finances</div>
            <div className="text-wrapper-5">Jobs</div>
            <div className="text-wrapper-6">Chat</div>
            <div className="text-wrapper-7">Store</div>
          </div>
          <img className="dollarsim-logos" alt="Dollarsim logos" src="dollarsim-logos-black-1.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;