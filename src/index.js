import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.css";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./assets/styles/theme";

// todo restore strict mode
ReactDOM.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
