import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Profile from "./views/Profile";
import Feed from "./views/Feed";
import LeatherWallet from "./views/wallet";

function App() {
  return (
    <div>
      <nav>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Feed
        </Link>
        <Link to="/profile" style={{ marginRight: "1rem" }}>
          Profile
        </Link>
        <Link to="/wallet">Wallet</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wallet" element={<LeatherWallet />} />
      </Routes>
    </div>
  );
}

export default App;
