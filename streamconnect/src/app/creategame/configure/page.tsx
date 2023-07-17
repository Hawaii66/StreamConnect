import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      Configure game
      <Link href={"/creategame/join"}>Join</Link>
    </div>
  );
}

export default page;
