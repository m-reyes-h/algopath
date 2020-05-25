import React from "react";
import { Form } from "react-bootstrap";
import { randomArray } from "../../../utils/common";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { lsValues, lsConfig } from "../state/atoms";

// Component ----------------------------------------------------------

function Config() {
  const lsValuesState = useRecoilValue(lsValues);
  const lsValuesUpdate = useSetRecoilState(lsValues);
  const lsConfigState = useRecoilValue(lsConfig);
  const lsConfigUpdate = useSetRecoilState(lsConfig);

  const [arraySize, setArraySize] = React.useState(lsValuesState.arraySize);
  const [target, setTarget] = React.useState(lsConfigState.target);
  const [speed, setSpeed] = React.useState(lsConfigState.speed);

  const handleRandomize = () => {
    const newValues = randomArray(1, lsValuesState.arraySize);
    lsValuesUpdate((prev) => ({
      ...prev,
      values: newValues,
    }));
  };

  const handleArraySize = (e) => {
    const { value } = e.target;
    setArraySize(value);
    lsValuesUpdate((prev) => ({
      ...prev,
      arraySize: value,
    }));
  };

  const handleTarget = (e) => {
    const { value } = e.target;
    setTarget(value);
    lsConfigUpdate((prev) => ({
      ...prev,
      target: value,
    }));
  };

  const hanldeSpeed = (e) => {
    const val = parseInt(e.target.value, 10);
    setSpeed(val);
    lsConfigUpdate((prev) => ({
      ...prev,
      speed: val,
    }));
  };

  // --------------------------------------------------------------------

  return (
    <header className="d-flex flex-wrap my-4 align-items-center">
      {/* Randomize */}
      <button
        type="button"
        className="btn btn-sm btn-outline-secondary"
        onClick={handleRandomize}
      >
        Randomize values
      </button>

      {/* Array Size */}
      <div className="d-flex justify-content-lg-start mx-3 btn btn-outline-secondary btn-sm align-items-center">
        <span className="w-100 text-left">Array size</span>
        <Form.Control
          type="range"
          custom
          min="3"
          max="200"
          step="10"
          value={arraySize}
          onChange={handleArraySize}
        />
      </div>

      {/* Speed */}
      <Form.Control
        as="select"
        size="sm"
        custom
        value={`${speed} sec.`}
        onChange={hanldeSpeed}
        className="btn btn-outline-secondary "
        style={{ width: "150px" }}
      >
        <option>Sorting speed</option>
        <option>0 sec.</option>
        <option>1 sec.</option>
        <option>2 sec.</option>
        <option>3 sec.</option>
        <option>5 sec.</option>
        <option>8 sec.</option>
        <option>13 sec.</option>
      </Form.Control>

      {/* Target */}
      <div className="form-group form-outlined-group form-group-sm ml-3 mb-0 d-flex align-items-center">
        <input
          type="number"
          className="form-control form-control-sm"
          style={{ width: "80px" }}
          id="target"
          name="target"
          min="1"
          max={arraySize}
          aria-describedby="emailHelp"
          placeholder="d"
          value={target}
          onChange={handleTarget}
        />
        <label htmlFor="target">
          <span>Target</span>
        </label>
      </div>

      {/* Start */}
      <div className="ml-auto">
        <button type="button" className="btn btn-sm btn-outline-primary">
          Start
        </button>
      </div>
    </header>
  );
}

export default Config;
