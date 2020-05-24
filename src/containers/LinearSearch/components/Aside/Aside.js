import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import asideOpen from "../../../../state/aside";
import Content from "./Content";

// Style --------------------------------------------------------------

const AsideSt = styled.aside`
  width: 300px;
  background-color: ${(props) => props.theme.palette.common.white};
  position: fixed;
  right: 0;
  top: 0;
  transition-duration: 400ms;
  box-shadow: ${(props) => props.theme.palette.shadows[2]};
  border-left: 1px solid ${(props) => props.theme.palette.grey[300]};
  transform: translateX(${(props) => (props.asideOpen ? "0px" : "300px")});
  z-index: 1031;
  background-color: ${(props) => props.theme.palette.grey[50]};

  header {
    height: 64px;
  }
`;

// Component ----------------------------------------------------------

function Aside({ title }) {
  const [isOpen, setIsOpen] = useRecoilState(asideOpen);

  return (
    <AsideSt className="min-vh-100 vh-100 page-aside" asideOpen={isOpen}>
      <header className="container d-flex justify-content-between align-items-center bg-white">
        <h1 className="subtitle1 mb-0">{title}</h1>
        <button
          type="button"
          className="close close-sm"
          onClick={() => setIsOpen(!isOpen)}
        />
      </header>
      <Content />
    </AsideSt>
  );
}

// Proptypes ----------------------------------------------------------

Aside.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Aside;
