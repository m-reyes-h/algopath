import React from "react";
import Config from "./components/Config";
import Grid from "./components/Grid";
import Aside from "./components/Aside/Aside";

// Component ----------------------------------------------------------

function LinearSearch() {
  return (
    <>
      <Aside title="Linear Search" />
      <Config />
      <div className="mt-5 pt-5">
        <Grid />
      </div>
    </>
  );
}

export default LinearSearch;
