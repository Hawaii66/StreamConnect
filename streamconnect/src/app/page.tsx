"use client";
import { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { UserContext } from "@/Context/UserContext";

export default function Home() {
    const { user, loadingUser } = useContext(UserContext);
    const [code, setCode] = useState("");

    const updateCode = (c: string) => {
        if (c === "") {
            setCode(c);
            return;
        }

        const onlyNumbers = c.replaceAll(" ", "").match(/^[0-9]*$/);
        if (onlyNumbers === null) {
            return;
        }
        setCode(c.replaceAll(" ", ""));
    };

    return (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-200 to-green-200">
            <div className="flex flex-col items-center justify-center gap-12">
                <h1 className="text-5xl font-bold text-blue-500 underline">
                    Join a game
                </h1>
                <div className="flex flex-col items-center justify-center gap-4">
                    <input
                        className="rounded-xl bg-slate-50 px-8 py-4 text-center text-5xl font-bold tracking-widest text-slate-600 shadow-lg"
                        value={
                            code.length > 3
                                ? code.substring(0, 3) +
                                  " " +
                                  code.substring(3, code.length)
                                : code
                        }
                        onChange={(s) => updateCode(s.target.value)}
                        maxLength={7}
                        placeholder="Code: 123 031"
                    />
                    <button className="flex flex-row items-center justify-evenly gap-4 rounded-lg bg-blue-600 px-12 py-4 text-center text-3xl font-bold text-slate-50 shadow-xl">
                        Join
                    </button>
                    {!loadingUser && (
                        <p>Playing as: {user ? user.name : "Anonymous"}</p>
                    )}
                </div>
                <div className="my-12" />
                {!user && !loadingUser && (
                    <>
                        <Link
                            href="https://id.twitch.tv/oauth2/authorize?client_id=h6ovx6f1eegtnblo9oan97yrn3lb0n&redirect_uri=http://localhost:3000/redirect/twitch&response_type=token&scope=user:read:email"
                            className="flex flex-row items-center justify-evenly gap-4 rounded-lg bg-purple-600 px-8 py-4 text-center text-xl font-bold text-slate-50"
                        >
                            <Icon icon="ion:logo-twitch" />
                            Connect Twitch
                        </Link>
                        <Link
                            href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000/redirect/youtube&response_type=token&client_id=530778465343-thqru86crl0g16aqo53nsm2qpt4obphq.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/youtube"
                            className="flex flex-row items-center justify-evenly gap-4 rounded-lg bg-purple-600 px-8 py-4 text-center text-xl font-bold text-slate-50"
                        >
                            <Icon icon="ion:logo-twitch" />
                            Connect Youtube
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
