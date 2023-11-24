import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider as OriroChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const colors = {
  primary: "#257CFF",
};

const theme = extendTheme({ colors });

type ChakraProviderProps = {
  children: ReactNode;
};

const ChakraProvider = ({ children }: ChakraProviderProps) => {
  return (
    <CacheProvider>
      <OriroChakraProvider theme={theme}>{children}</OriroChakraProvider>
    </CacheProvider>
  );
};

export default ChakraProvider;
