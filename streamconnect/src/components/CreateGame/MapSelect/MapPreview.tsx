import Link from "next/link";
import React from "react";

function MapPreview() {
  return (
    <div className="w-full rounded-lg shadow-2xl bg-slate-100">
      <div className="bg-gray-300 animate-pulse w-full aspect-video rounded-t-lg" />
      <div className="flex flex-row justify-between items-center px-2 rounded-lg py-2">
        <div>
          <p className="font-bold text-lg text-blue-500">Map name</p>
          <p className="font-semibold text-sm text-slate-700">
            Max players:{" "}
            <span className="font-extrabold text-sm text-slate-700">25</span>
          </p>
        </div>
        <Link
          href={"/creategame/configure"}
          className="px-4 py-2 bg-green-600 text-slate-200 rounded-md font-semibold"
        >
          Play
        </Link>
      </div>
    </div>
  );
}

export default MapPreview;
