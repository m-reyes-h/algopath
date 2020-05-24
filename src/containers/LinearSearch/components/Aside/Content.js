import React from "react";
import { Tab, Nav } from "react-bootstrap";
import styled from "styled-components";
import Wiki from "./Wiki";

// Style --------------------------------------------------------------

const NavSubSt = styled(Nav)`
  height: 48px;
  border-bottom: 1px solid ${(props) => props.theme.palette.grey[300]};

  .nav-link {
    font-weight: 500;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
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

const TabContentSt = styled(Tab.Content)`
  height: calc(100vh - 64px - 48px);
  overflow: auto;
`;

// Component ----------------------------------------------------------

function Content() {
  return (
    <div className="content">
      <Tab.Container id="left-tabs-example" defaultActiveKey="linear">
        <NavSubSt variant="pills" className="d-flex flex-row bg-white">
          <Nav.Item className="w-50">
            <Nav.Link eventKey="linear">Steps</Nav.Link>
          </Nav.Item>
          <Nav.Item className="w-50">
            <Nav.Link eventKey="binary">Wiki</Nav.Link>
          </Nav.Item>
        </NavSubSt>
        <TabContentSt>
          <Tab.Pane eventKey="linear">sfs</Tab.Pane>
          <Tab.Pane eventKey="binary" className="p-2">
            <Wiki />
          </Tab.Pane>
        </TabContentSt>
      </Tab.Container>
    </div>
  );
}

export default Content;
