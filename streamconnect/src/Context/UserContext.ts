"use client";

import { SignInProvider, User } from "@/Interfaces/User";
import { createContext } from "react";

export interface IUserContext {
    user: User | null;
    signOut: () => void;
    signIn: (token: string, type: SignInProvider) => Promise<User | null>;
    loadingUser: boolean;
}

export const UserContext = createContext<IUserContext>({
    signIn: async () => {
        return Promise.resolve(null);
    },
    signOut: () => {},
    user: null,
    loadingUser: true,
});
