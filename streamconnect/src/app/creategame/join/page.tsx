import Avatar from "@/components/CreateGame/Join/Avatar";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="h-full from-blue-200 via-green-400 to-yellow-100 bg-gradient-to-tr pb-16 pt-4">
      <div className="w-full flex items-center justify-center py-12">
        <div className="relative rotate-2 bg-slate-200 px-8 pt-4 pb-2 rounded-md shadow-xl">
          <h2 className="text-5xl font-extrabold text-green-500 -rotate-1">
            Code: <span className="text-cyan-500">361 851</span>
          </h2>
          <p className="text-center pt-2 font-bold text-slate-600">
            Join at StreamConnect.tv
          </p>
        </div>
      </div>
      <div className="w-full relative">
        <h2 className="ml-8 my-12 text-2xl font-bold text-slate-600">
          36 / 48 is waiting
        </h2>
        <div className="absolute w-full flex justify-center top-0">
          <Link
            href={"/creategame/start"}
            className="text-3xl text-slate-200 bg-indigo-400 rounded-xl font-extrabold px-8 py-2"
          >
            Start
          </Link>
        </div>
      </div>
      <div className="w-full grid grid-cols-8 gap-4">
        {Array.from(Array(36)).map((_) => (
          <Avatar />
        ))}
      </div>
    </div>
  );
}

export default page;
