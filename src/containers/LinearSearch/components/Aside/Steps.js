import React, { useContext } from "react";
import styled from "styled-components";
import { LSContext } from "../../context/LSContext";

// Style --------------------------------------------------------------

const StepSt = styled.div`
  .accordion {
    .card {
      border-radius: 0.25rem !important;
      .card-header {
        border-bottom: 0;
        background-color: ${(props) => props.theme.palette.common.white};
        cursor: pointer;
      }

      .card-body {
        padding-top: 0;
      }
    }
  }

  ul {
    li {
      margin: 0.55rem 0;
      padding: 0.25rem;
      &.bold {
        color: ${(props) => props.theme.palette.text.primary} !important;
      }
    }
  }
`;

// Component ----------------------------------------------------------

function Steps() {
  const { config } = useContext(LSContext);

  // --------------------------------------------------------------------

  return (
    <StepSt>
      {/* Pseudocode */}
      <div className="card mb-2">
        <div className="card-body">
          <div className="card-title body2 subtitle2">Pseudocode</div>
          <div className="card-text body2 text-secondary">
            <ul className="pl-3">
              <li
                className={`${
                  config.step === 0 && config.current === 0 ? "bold" : ""
                }`}
              >
                Repeat, starting at the first element:
              </li>
              <ul className="pl-3">
                <li className={`${config.step === 1 ? "bold" : ""}`}>
                  if the first element is what you're looking for (the target),
                  stop.
                </li>
                <li className={`${config.step === 2 ? "bold" : ""}`}>
                  Otherwise, move to the next element.
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="card mb-2">
        <div className="card-body">
          <div className="card-title body2 subtitle2">Values</div>
          <table className="table table-borderless body2 subtitle2 text-secondary">
            <tbody>
              <tr>
                <td>target</td>
                <td className="w-25 text-right">{config.target}</td>
              </tr>
              <tr>
                <td>current</td>
                <td className="w-25 text-right">
                  {config.values[config.current]}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </StepSt>
  );
}

export default Steps;
