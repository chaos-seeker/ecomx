import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import LayoutBase from "@/containers/layout/base";
import { Providers } from "./providers";
import "./globals.css";

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
      <body className={`${fontInter.variable} antialiased`}>
        <Providers>
          <LayoutBase>{props.children}</LayoutBase>
        </Providers>
      </body>
    </html>
  );
}
