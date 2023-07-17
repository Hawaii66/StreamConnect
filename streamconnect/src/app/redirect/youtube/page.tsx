"use client";

import { UserContext } from "@/Context/UserContext";
import { User } from "@/Interfaces/User";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

function Auth() {
    const router = useRouter();
    const { signIn } = useContext(UserContext);

    const getUserData = async () => {
        const parsedHash = new URLSearchParams(window.location.hash.slice(1));

        const accessToken = parsedHash.get("access_token");
        if (accessToken === null) {
            alert("No access token found");
            router.replace("/");
            return;
        }

        await signIn(accessToken, "Youtube");
        router.replace("/");
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className="flex h-full w-full items-center justify-center">
            <h1>Loading User</h1>
        </div>
    );
}

export default Auth;
