import MapGrid from "@/components/CreateGame/MapSelect/MapGrid";
import React from "react";

function creategame() {
  return (
    <div className="from-blue-200 via-green-400 to-yellow-100 bg-gradient-to-tr pb-16 pt-4">
      <MapGrid count={4} header="Small" />
      <MapGrid count={3} header="Medium" />
      <MapGrid count={7} header="Large" />
      <MapGrid count={8} header="Huge" />
    </div>
  );
}

export default creategame;
