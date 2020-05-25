import React from "react";
import ToolBar from "./components/ToolBar";
import Grid from "./components/Grid";
import Aside from "./components/Aside/Aside";

// Component ----------------------------------------------------------

function LinearSearch() {
  return (
    <>
      <Aside title="Linear Search" />
      <ToolBar />
      <div className="mt-5 pb-4 pt-3">
        <Grid />
      </div>
    </>
  );
}

export default LinearSearch;
