import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

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
    <html lang="en">
      <body className="h-screen flex flex-col">
        <nav className="flex justify-between align-middle py-2 px-4 bg-slate-100">
          <Link href={"/"}>
            <h1
              className="text-blue-600 text-3xl flex justify-center align-middle font-extrabold"
              style={{ letterSpacing: 1.2 }}
            >
              StreamConnect.tv
            </h1>
          </Link>

          <Link
            href={"/creategame"}
            className="py-2 px-4 rounded-xl bg-green-500 text-slate-100 shadow-lg font-extrabold"
          >
            Create Game
          </Link>
        </nav>
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}