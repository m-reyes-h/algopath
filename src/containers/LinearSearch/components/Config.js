import React from "react";
import { Form } from "react-bootstrap";

function Config() {
  return (
    <header className="d-flex my-4 align-items-center ">
      <button type="button" className="btn btn-sm btn-outline-secondary">
        Randomize values
      </button>
      <div className="d-flex justify-content-lg-start mx-3 btn btn-outline-secondary btn-sm align-items-center">
        <span className="w-100 text-left">Array size</span>
        <Form.Control type="range" custom />
      </div>
      <Form.Control
        value="Sorting speed"
        as="select"
        size="sm"
        custom
        className="btn btn-outline-secondary w-25"
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
      <div className="ml-auto">
        <button type="button" className="btn btn-sm btn-outline-primary">
          Start
        </button>
      </div>
    </header>
  );
}

export default Config;
