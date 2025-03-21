import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import "../src/styles/styles.css"
// import bootstrap here

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
