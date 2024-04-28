import React, { useState } from "react";
import "./LeatherWallet.css";

const LeatherWallet = () => {
  // State to manage wallet balance (placeholder data)
  const [balance, setBalance] = useState(100); // Placeholder balance (in dollars)

  return (
    <div className="leather-wallet">
      <h2>Leather Wallet</h2>
      <div className="wallet-balance">
        <p>Current Balance:</p>
        <p>${balance}</p>
      </div>
      {/* Additional wallet functionalities can be added here */}
    </div>
  );
};

export default LeatherWallet;
