import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


// Render the App component to the root element
const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);
root.render(<App />);
