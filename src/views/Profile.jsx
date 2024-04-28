import React, { useState, useEffect } from "react";
import "./Profile.css";
import { ConnectWallet, userSession } from "../components/ConnectWallet";  // Adjust this import based on your directory structure
import { StacksTestnet, StacksNetwork } from '@stacks/network';

const customNetwork = new StacksTestnet();  // Or StacksMainnet if you're using a custom mainnet
customNetwork.coreApiUrl = 'https://api.platform.hiro.so/v1/ext/73d398f7614f9bd6c6108439a34d5b85/stacks-blockchain-api'; // Customize the API URL
function Profile() {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState('Loading...');

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      const userData = userSession.loadUserData();
      setUser(userData.profile);
      fetchBalance(userData.profile.stxAddress.testnet);
    }
  }, []);

  const fetchBalance = async (address) => {
    try {
      const response = await fetch(`${devnet.coreApiUrl}/v2/accounts/${address}`);
      const data = await response.json();
      if (data.balance) {
        setBalance(data.balance); // Assumes balance is directly available and formatted correctly
      } else {
        setBalance('Balance unavailable');
      }
    } catch (error) {
      console.error('Error fetching balance:', error);
      setBalance('Failed to load balance');
    }
  };

  const onLoggedIn = () => {
    const userData = userSession.loadUserData();
    setUser(userData.profile);
    fetchBalance(userData.profile.stxAddress.testnet);
  };

  return (
    <div className="profile">
      {!user ? (
        <div className="connect-button-wrapper">
        <ConnectWallet onLoggedIn={onLoggedIn} className="connect-button" />
      </div>
      ) : (
        <>
          <div className="profile-header">
            <img src={user.avatar || "https://via.placeholder.com/150"} alt="Profile avatar" className="profile-avatar" />
            <div className="profile-info">
              <h1>{user.name || "Stacks User"}</h1>
              <p>{user.bio || "No bio"}</p>
              <p>Balance: {balance} STX</p>
            </div>
          </div>
          <button onClick={() => userSession.signUserOut()}>Disconnect Wallet</button>
        </>
      )}
    </div>
  );
}

export default Profile;
