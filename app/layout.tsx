"use client";

import "./globals.css";
import { Libre_Caslon_Display, Cormorant, Montserrat } from "next/font/google";
import HomeGradientBackground from "../components/HomeGradientBackground/HomeGradientBackground";

const montserrat = Montserrat({
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const libre_caslon_display = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-caslon-display",
});

const libre_caslon_text = Cormorant({
  weight: "300",
  subsets: ["latin"],
  style: "italic",
  display: "swap",
  variable: "--font-libre-caslon-text",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={
        libre_caslon_display.variable +
        " " +
        libre_caslon_text.variable +
        " " +
        montserrat.variable
      }
    >
      <head />
      <body className="dark">
        <HomeGradientBackground />
        <div>{children}</div>
      </body>
    </html>
  );
}
