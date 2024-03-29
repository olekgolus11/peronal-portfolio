"use client";

import "./globals.css";
import { Libre_Caslon_Display } from "next/font/google";
import HomeGradientBackground from "../components/HomeGradientBackground/HomeGradientBackground";

const libre_caslon_display = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-caslon-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={libre_caslon_display.variable}>
      <head />
      <body className='dark'>
        <HomeGradientBackground />
        <div>{children}</div>
      </body>
    </html>
  );
}
