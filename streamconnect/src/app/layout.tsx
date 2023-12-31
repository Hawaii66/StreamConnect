import { UserContext } from "@/Context/UserContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import UserContextWrapper from "@/components/ContextWrappers/UserContextWrapper";
import Navgationbar from "@/components/Navgationbar";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <UserContextWrapper>
            <html lang="en">
                <body className="flex h-screen flex-col">
                    <Navgationbar />
                    <div className="flex-grow">{children}</div>
                </body>
            </html>
        </UserContextWrapper>
    );
}
