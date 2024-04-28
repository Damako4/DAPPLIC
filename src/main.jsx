import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./components/AuthCtx"; // Adjust the path as necessary

import { Connect } from "@stacks/connect-react";
import { userSession } from "./user-session";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Connect
        authOptions={{
          appDetails: {
            name: "Stacks React Template",
            icon: window.location.origin + "/logo.png",
          },
          redirectTo: "/",
          onFinish: () => {
            window.location.reload();
          },
          userSession,
        }}
      >
        <BrowserRouter
          style={{
            padding: "1rem",
            backgroundColor: "#f0f0f0",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <App />
        </BrowserRouter>
      </Connect>
    </AuthProvider>
  </React.StrictMode>,
);
