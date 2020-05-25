import React, { useContext } from "react";
import styled from "styled-components";
import { LSContext } from "../context/LSContext";

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

    &.current {
      background-color: ${(props) => props.theme.palette.info.light};
      border-color: ${(props) => props.theme.palette.info.light} !important;
      color: ${(props) => props.theme.palette.info.main};
    }

    &.founded {
      background-color: ${(props) => props.theme.palette.yellow.light};
      border-color: ${(props) => props.theme.palette.yellow.light} !important;
      color: ${(props) => props.theme.palette.yellow.main};
    }
  }
`;

// Component ----------------------------------------------------------

function Grid() {
  const { config } = useContext(LSContext);

  // --------------------------------------------------------------------

  const { values, current, founded } = config;
  return (
    <GridSt className="grid">
      {values.map((value, index) => (
        <div
          key={index}
          className={`box border d-inline-flex justify-content-center align-items-center ${
            current === index ? "current" : ""
          }
          ${founded === true && current === index ? "founded" : ""}`}
        >
          {value}
        </div>
      ))}
    </GridSt>
  );
}

export default Grid;
