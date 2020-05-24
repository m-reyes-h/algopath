import React from "react";
import { Link } from "react-router-dom";

// Component ----------------------------------------------------------

function NotFound() {
  return (
    <div className="container min-vh-100 vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="h4 mb-3">¯\_(ツ)_/¯</div>
      <h1 className="h6 text-muted mb-0">Search algoritm broken</h1>
      <p>We can not found your page</p>
      <Link to="/" className="btn btn-text">
        Go home
      </Link>
    </div>
  );
}

export default NotFound;
