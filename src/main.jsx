import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RootContextProvider from "./context/RootContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootContextProvider>
      <App />
    </RootContextProvider>
  </React.StrictMode>
);
