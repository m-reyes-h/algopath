import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import linearSearchAtom from "../../../state/linearSearch";
import { randomArray } from "../../../utils/common";

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
  const [rState, setRState] = useRecoilState(linearSearchAtom);

  React.useEffect(() => {
    const values = randomArray(1, rState.valueSize);
    setRState({ ...rState, values });
  }, []);

  // --------------------------------------------------------------------

  return (
    <GridSt className="grid">
      {rState.values.map((value, index) => (
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
