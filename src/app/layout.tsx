"use client";

import ChakraProvider from "@/providers/ChakraProvider";
import { ReactNode } from "react";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "./PretendardVariable.woff2",
});

type RooteLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RooteLayoutProps) => {
  return (
    <html lang="kr">
      <body className={pretendard.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
