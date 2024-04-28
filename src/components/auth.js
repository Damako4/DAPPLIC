import { AppConfig, UserSession } from '@stacks/auth';

// Define the application details and the scopes your application needs.
const appConfig = new AppConfig(['store_write', 'publish_data']);

// Initialize a user session with the specified app configuration.
export const userSession = new UserSession({ appConfig });

// Optionally, you can include helper functions to manage login and logout if they're not managed directly within components.
export const loginUser = () => {
  userSession.redirectToSignIn();  // This method redirects the user to sign in with their Stacks wallet
}

export const logoutUser = () => {
  userSession.signUserOut(window.location.origin);  // This method signs the user out
}
