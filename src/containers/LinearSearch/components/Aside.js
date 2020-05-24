import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import asideOpen from "../../../state/aside";

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
`;

// Component ----------------------------------------------------------

function Aside() {
  const [isOpen] = useRecoilState(asideOpen);

  return (
    <AsideSt className="min-vh-100 vh-100 page-aside" asideOpen={isOpen}>
      aside
    </AsideSt>
  );
}

export default Aside;
