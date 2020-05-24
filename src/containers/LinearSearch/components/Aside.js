import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import asideOpen from "../../../state/aside";

// Style --------------------------------------------------------------

const AsideSt = styled.aside`
  width: 300px;
  background-color: red;
  position: fixed;
  right: 0;
  top: 0;
  transition-duration: 400ms;
  transform: translateX(${(props) => (props.asideOpen ? "0px" : "300px")});
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
