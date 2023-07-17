export interface User {
    id: number;
    name: string;
    email: string;
    icon: string;
    description: string;
}

export type SignInProvider = "Youtube" | "Twitch";
