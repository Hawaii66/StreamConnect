"use client";

import { UserContext } from "@/Context/UserContext";
import Link from "next/link";
import React, { useContext } from "react";

function Navgationbar() {
    const { user, signOut, loadingUser } = useContext(UserContext);

    return (
        <nav className="flex max-h-16 justify-between bg-slate-100 px-4 py-2 align-middle">
            <Link href={"/"}>
                <h1
                    className="flex justify-center align-middle text-3xl font-extrabold text-blue-600"
                    style={{ letterSpacing: 1.2 }}
                >
                    StreamConnect.tv
                </h1>
            </Link>

            <div className="flex flex-row items-center justify-end">
                <Link
                    href={"/creategame"}
                    className="rounded-xl bg-green-500 px-4 py-2 font-extrabold text-slate-100 shadow-lg"
                >
                    Create Game
                </Link>
                {user && !loadingUser && (
                    <button
                        onClick={() => {
                            if (confirm("Sign out")) {
                                signOut();
                            }
                        }}
                        className="mx-8 flex h-full flex-row items-center gap-4 rounded-md bg-slate-50 px-4 py-2 shadow-lg"
                    >
                        <img
                            src={user.icon}
                            alt="User icon"
                            className="h-full rounded-full"
                        />
                        <p>{user.name}</p>
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navgationbar;
