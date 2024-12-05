import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'; // or the path to your main CSS file

import App from "./App";  // Your App component

ReactDOM.render(
  <Router>  {/* Wrap App with Router here */}
    <App />
  </Router>,
  document.getElementById("root")
);
