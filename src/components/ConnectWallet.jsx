import React from 'react';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';

const appConfig = new AppConfig(['store_write', 'publish_data']);
export const userSession = new UserSession({ appConfig });

export const ConnectWallet = ({ onLoggedIn }) => {
  const authenticate = () => {
    showConnect({
      appDetails: {
        name: "MyApp",
        icon: window.location.origin + '/logo192.png',
      },
      redirectTo: '/',
      onFinish: () => {
        if (onLoggedIn) {
          onLoggedIn();
        }
      },
      userSession
    });
  };

  return <button onClick={authenticate}>Connect Wallet</button>;
};
