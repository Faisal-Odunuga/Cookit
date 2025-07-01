import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import GlobalContext from "./hooks/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalContext>
        <App />
        <ToastContainer />
      </GlobalContext>
    </BrowserRouter>
  </StrictMode>
);
