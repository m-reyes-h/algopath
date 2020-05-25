import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { lsValuesSelector } from "../state/selectors";

// Style --------------------------------------------------------------

const GridSt = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(46px, 1fr));

  .box {
    max-width: 46px;
    max-height: 46px;
    height: 46px;
    width: 46px;
    border-radius: 3px;
    user-select: none;
  }
`;

// Component ----------------------------------------------------------

function Grid() {
  const { values } = useRecoilValue(lsValuesSelector);

  // --------------------------------------------------------------------

  return (
    <GridSt className="grid">
      {values.map((value, index) => (
        <div
          key={index}
          className="box border d-inline-flex justify-content-center align-items-center"
        >
          {value}
        </div>
      ))}
    </GridSt>
  );
}

export default Grid;
