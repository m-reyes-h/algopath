import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import asideOpen from "../state/aside";
import Navbar from "./Navbar";

// Style --------------------------------------------------------------

const LayoutSt = styled.div`
  padding-top: 75px;
  padding-right: ${(props) => (props.asideOpen ? "300px" : "0px")};
`;

// Component ----------------------------------------------------------

function MainLayout({ children }) {
  const [isOpen] = useRecoilState(asideOpen);

  // Component ----------------------------------------------------------

  return (
    <LayoutSt className="container-fluid d-flex min-vh-100" asideOpen={isOpen}>
      <Navbar />
      {children}
    </LayoutSt>
  );
}

// Proptypes ----------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
