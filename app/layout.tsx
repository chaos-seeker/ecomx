import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import LayoutBase from "@/containers/layout/base";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ecomx",
  description: "fullstack ecommerce",
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${fontInter.variable} antialiased`}
      >
        <LayoutBase>{props.children}</LayoutBase>
      </body>
    </html>
  );
}
