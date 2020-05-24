import React from "react";
import styled from "styled-components";

// Style --------------------------------------------------------------

// todo needs to be visible
const AsideSt = styled.aside`
  width: 300px;
  background-color: red;
  position: fixed;
  right: 0;
  top: 0;
`;

// Component ----------------------------------------------------------

function Aside() {
  return <AsideSt className="min-vh-100 vh-100">aside</AsideSt>;
}

export default Aside;
