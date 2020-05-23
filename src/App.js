import React from "react";
import styled from "styled-components";
import { Tab, Nav } from "react-bootstrap";
import LinearSearch from "./containers/LinearSearch/LinearSearch";

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
      }

      &:not(.active) {
        .nav-link {
          color: ${(props) => props.theme.palette.grey[600]} !important;
        }
      }

      &.active {
        .nav-link {
          border-bottom: 2px solid
            ${(props) => props.theme.palette.primary.main};
        }
      }
    }
  }
`;

const NavSubSt = styled(Nav)`
  height: 48px;
  border-bottom: 1px solid ${(props) => props.theme.palette.grey[300]};

  .nav-link {
    font-weight: 500;
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1.5rem;
    background-color: transparent !important;
    border-radius: 0;
    font-size: ${(props) => props.theme.palette.typography.bodySize};
    border-bottom: 2px solid transparent;

    &:not(.active) {
      color: ${(props) => props.theme.palette.grey[600]} !important;
    }

    &.active {
      border-bottom: 2px solid ${(props) => props.theme.palette.primary.main};
    }
  }
`;

// Component ----------------------------------------------------------

function App() {
  return (
    <div className="App">
      <NavSt className="navbar navbar-expand-sm navbar-light bg-white ">
        <div className="container">
          <a className="navbar-brand" href="/#">
            AlgoPath
          </a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Path finder
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Sort
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/#">
                  Search
                </a>
              </li>
            </ul>
          </div>
        </div>
      </NavSt>
      <main className="container">
        <h1 className="h3 font-weight-light my-4">Search</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="linear">
          <NavSubSt variant="pills" className="d-flex flex-row">
            <Nav.Item>
              <Nav.Link eventKey="linear">Linear Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="binary">Binary Search</Nav.Link>
            </Nav.Item>
          </NavSubSt>

          <Tab.Content>
            <Tab.Pane eventKey="linear">
              <LinearSearch />
            </Tab.Pane>
            <Tab.Pane eventKey="binary">
              <p>Md</p>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </main>
    </div>
  );
}

export default App;
