import React from "react";
import { Accordion, Card } from "react-bootstrap";
import styled from "styled-components";

// Style --------------------------------------------------------------

const WikiSt = styled.div`
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
`;

// Component ----------------------------------------------------------

function Wiki() {
  return (
    <WikiSt>
      <div className="card mb-2">
        <div className="card-body">
          <p className="card-text body2 text-secondary">
            In linear search, the idea of the algorithm is to iterate across the
            array from left to right, searching for a specified element.
          </p>
          <a
            href="https://www.youtube.com/watch?v=TwsgCHYmbbA"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link body2"
          >
            CS50
          </a>
        </div>
      </div>
      <Accordion>
        <Card className="mb-2">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="subtitle2 body2 d-flex justify-content-between"
          >
            <span>Worst-case scenario</span>
            <span>O(n)</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="body2 text-secondary">
              We have to look through the entire array of n elements, either
              because the target element is the las element of the array or
              doesn't exist in the array at all.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="mb-2">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="1"
            className="subtitle2 body2 d-flex justify-content-between"
          >
            <span>Best-case scenario</span>
            <span> &#x3A9;(1)</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="body2 text-secondary">
              The target element is the first element of the array, and so we
              can stop looking inmmediately after we start.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div className="card mb-2">
        <div className="card-body">
          <p className="card-text body2 text-secondary">
            Linear search is rarely practical because other search algorithms
            and schemes, such as the binary search algorithm and hash tables,
            allow significantly faster searching for all but short lists.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Linear_search"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link body2"
          >
            Wikipedia
          </a>
        </div>
      </div>
    </WikiSt>
  );
}

export default Wiki;
