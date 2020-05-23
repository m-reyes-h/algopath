import React from "react";
import styled from "styled-components";

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
  }
`;

// Component ----------------------------------------------------------

function Grid() {
  return (
    <GridSt className="grid">
      {new Array(50).fill("0").map((v, index) => (
        <div className="box border d-inline-flex justify-content-center align-items-center">
          {index}
        </div>
      ))}
    </GridSt>
  );
}

export default Grid;
