import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

// Component ----------------------------------------------------------

function MainLayout({ children }) {
  return (
    <div
      className="container-fluid d0flex min-vh-100"
      style={{ paddingTop: "75px", paddingRight: "300px" }}
    >
      <Navbar />
      {children}
    </div>
  );
}

// Proptypes ----------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
