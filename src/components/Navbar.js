import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { MdGrain as AnalyzeIcon } from "react-icons/md";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useRecoilState } from "recoil";
import asideOpen from "../state/aside";

// Style --------------------------------------------------------------

const NavSt = styled.nav`
  height: 75px;
  border-bottom: 1px solid ${(props) => props.theme.palette.grey[300]};
  right: ${(props) => (props.asideOpen ? "300px" : "0px")};

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
  const [isOpen, setIsOpen] = useRecoilState(asideOpen);

  // Component ----------------------------------------------------------

  return (
    <NavSt
      className="navbar navbar-expand-sm navbar-light bg-white fixed-top"
      asideOpen={isOpen}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          AlgoPath
        </Link>

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
                <button
                  type="button"
                  className="nav-link border-0 bg-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
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
