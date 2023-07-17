import React from "react";
import MapPreview from "./MapPreview";

interface Props {
  count: number;
  header: string;
}

function MapGrid({ count, header }: Props) {
  return (
    <>
      <h3 className="w-full text-center font-extrabold text-slate-700 text-3xl mb-4 underline-offset-2 underline">
        {header}
      </h3>
      <div className="grid grid-cols-4 gap-12 mx-12 mb-12">
        {Array.from(Array(count)).map((_) => (
          <MapPreview />
        ))}
      </div>
    </>
  );
}

export default MapGrid;
