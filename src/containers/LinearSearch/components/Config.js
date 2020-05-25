import React from "react";
import { useRecoilState } from "recoil";
import { Form } from "react-bootstrap";
import { randomArray, randomValue } from "../../../utils/common";
import linearSearchAtom from "../../../state/linearSearch";

// Component ----------------------------------------------------------

function Config() {
  const [rState, setRState] = useRecoilState(linearSearchAtom);
  const [arraySize, setArraySize] = React.useState(rState.valueSize);
  const [target, setTarget] = React.useState(rState.target);
  const [speed, setSpeed] = React.useState(rState.speed);

  const handleRandomize = () => {
    setTarget(randomValue(arraySize));
    setRState({ ...rState, values: randomArray(1, arraySize) });
  };

  React.useEffect(() => {
    handleRandomize();
  }, [arraySize]);

  const handleArraySize = (e) => {
    const { value } = e.target;
    setRState({ ...rState, valueSize: value });
    setArraySize(value);
  };

  const handleTarget = (e) => {
    const { value } = e.target;
    setRState({ ...rState, target: value });
    setTarget(value);
  };

  // todo speed must be delete the sorting speed  to be a label like an input
  const handleSpeed = (e) => {
    const value = parseInt(e.target.value, 10);
    setRState({ ...rState, speed: value });
    setSpeed(value);
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
        onChange={handleSpeed}
        value={`${speed} sec.`}
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
      <div className="ml-auto">
        <button type="button" className="btn btn-sm btn-outline-primary">
          Start
        </button>
      </div>
    </header>
  );
}

export default Config;
