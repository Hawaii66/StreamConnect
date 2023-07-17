"use client";

import { UserContext } from "@/Context/UserContext";
import { SignInProvider, User } from "@/Interfaces/User";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
    children: React.ReactNode;
}

function UserContextWrapper({ children }: Props) {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState("");
    const [initalLoadingUser, setInitalLoadingUser] = useState(true);

    const signInTwitch = async (token: string) => {
        const data = await fetch("https://api.twitch.tv/helix/users", {
            headers: {
                Authorization: `Bearer ${token}`,
                "Client-ID": "h6ovx6f1eegtnblo9oan97yrn3lb0n",
            },
        });

        if (data.status !== 200) {
            alert("Cant sign in with twitch: " + data.status);
            return null;
        }

        const users = (await data.json()).data;
        const twitchUser = users[0];
        const user: User = {
            description: twitchUser.description,
            email: twitchUser.email,
            icon: twitchUser.profile_image_url,
            id: twitchUser.id,
            name: twitchUser.display_name,
        };
        return user;
    };

    const signInYoutube = async (token: string) => {
        const data = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?access_token=${token}&part=snippet&mine=true`
        );
        if (data.status !== 200) {
            alert("Cant sign in with youtube: " + data.status);
            return null;
        }

        const users = (await data.json()).items;
        const youtubeUser = users[0];
        const user: User = {
            description: "",
            email: "",
            icon: youtubeUser.snippet.thumbnails.high.url,
            id: youtubeUser.id,
            name: youtubeUser.snippet.title,
        };
        return user;
    };

    const signIn = async (token: string, type: SignInProvider) => {
        const user =
            type === "Twitch"
                ? await signInTwitch(token)
                : await signInYoutube(token);
        if (user === null) {
            router.replace("/");
            return null;
        }
        setToken(token);

        localStorage.setItem("token", token);
        localStorage.setItem("provider", type);
        setUser(user);

        return user;
    };

    const signOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("provider");
        setToken("");
        setUser(null);
    };

    const initalGetUser = async () => {
        const savedToken = localStorage.getItem("token");
        const provider = localStorage.getItem("provider");
        if (savedToken !== null) {
            await signIn(savedToken, provider as SignInProvider);
        }

        setInitalLoadingUser(false);
    };

    useEffect(() => {
        initalGetUser();
    }, []);

    return (
        <UserContext.Provider
            value={{
                signIn,
                signOut,
                user,
                loadingUser: initalLoadingUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserContextWrapper;
