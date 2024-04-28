import {
    AppConfig,
    UserSession,
    showConnect,
    callReadOnlyFunction
  } from '@stacks/connect';
  import { StacksDevnet } from '@stacks/network';
  
  // Configuration for your application
  const appConfig = new AppConfig(['store_write', 'publish_data'], document.location.href);
  const userSession = new UserSession({ appConfig });
  const network = new StacksDevnet();  // Use StacksMainnet for production
  
  // Function to authenticate the user
  export const authenticate = () => {
    showConnect({
      appDetails: {
        name: "Your App Name",
        icon: "url_to_your_app_icon",
      },
      redirectTo: '/',
      finished: () => {
        window.location.reload();
      },
      userSession,
    });
  };
  
  // Function to fetch data from a Clarity smart contract
  export const fetch = async (contractAddress, contractName, functionName, functionArgs = []) => {
    const options = {
      contractAddress,
      contractName,
      functionName,
      functionArgs,
      senderAddress: userSession.loadUserData().profile.stxAddress.devnet, // or .mainnet
      network,
    };
  
    try {
      const result = await callReadOnlyFunction(options);
      return result;
    } catch (error) {
      console.error('Failed to fetch data:', error);
      return null;
    }
  };
  