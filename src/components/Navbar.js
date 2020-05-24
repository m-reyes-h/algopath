import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdGrain as AnalyzeIcon } from "react-icons/md";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

// Style --------------------------------------------------------------

const NavSt = styled.nav`
  height: 75px;
  border-bottom: 1px solid ${(props) => props.theme.palette.grey[300]};

  .navbar-brand {
    color: ${(props) => props.theme.palette.text.primary} !important;
  }

  .navbar-nav {
    height: 75px;
    .nav-item {
      height: 100%;
      display: flex;
      align-items: center;

      .nav-link {
        font-weight: 500;
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 1.5rem;
        border-bottom: 2px solid transparent;
      }

      .nav-link:not(.active) {
        color: ${(props) => props.theme.palette.grey[600]} !important;
      }

      .nav-link.active {
        border-bottom: 2px solid ${(props) => props.theme.palette.primary.main};
      }
    }
  }
`;

// Component ----------------------------------------------------------

function Navbar() {
  return (
    <NavSt className="navbar navbar-expand-sm navbar-light bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/#">
          AlgoPath
        </a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/pathfinder">
                Path finder
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sort">
                Sort
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Analyzer</Tooltip>}
              >
                <button type="button" className="nav-link border-0 bg-white">
                  <AnalyzeIcon size={24} />
                </button>
              </OverlayTrigger>
            </li>
          </ul>
        </div>
      </div>
    </NavSt>
  );
}

export default Navbar;
