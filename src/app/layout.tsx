"use client";

import ChakraProvider from "@/providers/ChakraProvider";
import { ReactNode } from "react";
import localFont from "next/font/local";
import { Archivo_Black } from "next/font/google";

const pretendard = localFont({
  src: "./PretendardVariable.woff2",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-archivo-black",
  display: "swap",
});

type RooteLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RooteLayoutProps) => {
  return (
    <html lang="kr" className={archivoBlack.variable}>
      <body className={pretendard.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
