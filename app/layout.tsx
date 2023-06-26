"use client";

import "./globals.css";
import HomeGradientBackground from "../components/HomeGradientBackground/HomeGradientBackground";
import fontVariables from "@/utils/fonts/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <head />
      <body className="dark">
        <HomeGradientBackground />
        <div>{children}</div>
      </body>
    </html>
  );
}
