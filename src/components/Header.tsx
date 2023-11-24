import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import Logo from "./Icons/Logo";

const Header = () => {
  return (
    <Box
      position="absolute"
      top={0}
      display="flex"
      justifyContent="space-between"
      paddingTop="47px"
      paddingLeft="60px"
      paddingRight="60px"
      width="100%"
    >
      <Box width="100.2px" />
      <Logo color="white" width="137px" height="22px" />
      <Flex gap="16px" alignItems="center">
        <Link
          color="rgba(255, 255, 255, 0.50)"
          _hover={{ border: "none", color: "#FFF" }}
        >
          KOR
        </Link>
        <Text color="rgba(255, 255, 255, 0.50)">|</Text>
        <Link
          color="rgba(255, 255, 255, 0.50)"
          _hover={{ border: "none", color: "white" }}
        >
          ENG
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
