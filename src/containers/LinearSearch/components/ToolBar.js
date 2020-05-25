import React, { useContext, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import LinearSearchAlgorithm from "../LinearSearchAlgorithm";
import { randomArray, randomValue } from "../../../utils/common";
import { LSContext } from "../context/LSContext";

// Component ----------------------------------------------------------

function Config() {
  const { config, updateConfig } = useContext(LSContext);
  const [arraySize, setArraySize] = useState(config.arraySize);
  const [target, setTarget] = useState(config.target);
  const [speed, setSpeed] = useState(config.speed);

  const updateValues = (size) => {
    const newValues = randomArray(1, size);
    const newTarget = randomValue(size);
    setTarget(newTarget);
    updateConfig({
      ...config,
      values: newValues,
      arraySize: size,
      target: newTarget,
    });
  };

  const handleArraySize = (e) => {
    const size = e.target.value;
    setArraySize(size);
    updateValues(size);
  };

  const handleRandomize = () => {
    updateValues(config.arraySize);
  };

  const handleTarget = (e) => {
    const newTarget = parseInt(e.target.value, 10);
    setTarget(newTarget);
    updateConfig({ ...config, target: newTarget });
  };

  const handleSpeed = (e) => {
    const newSpeed = parseInt(e.target.value, 10);
    setSpeed(newSpeed);
    updateConfig({ ...config, speed: newSpeed });
  };

  const handleStart = () => {
    LinearSearchAlgorithm(config, updateConfig);
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
          max="100"
          step="3"
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
        className="btn btn-outline-secondary "
        style={{ width: "150px" }}
        onChange={handleSpeed}
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
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={handleStart}
        >
          Start
        </button>
      </div>
    </header>
  );
}

export default Config;
