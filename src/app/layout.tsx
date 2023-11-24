import ChakraProvider from "@/providers/ChakraProvider";
import { ReactNode } from "react";

type RooteLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RooteLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
