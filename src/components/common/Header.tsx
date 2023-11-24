import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import Logo from "../Icons/Logo";
import { useIsKorea } from "@/store/useIsKorea";

const Header = () => {
  const { isKorea, setIsKorea } = useIsKorea();

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
          onClick={() => setIsKorea(true)}
          color={isKorea ? "white" : "rgba(255, 255, 255, 0.50)"}
          _hover={{ border: "none", color: "#FFF", cursor: "pointer" }}
        >
          KOR
        </Link>
        <Text color="rgba(255, 255, 255, 0.50)">|</Text>
        <Link
          onClick={() => setIsKorea(false)}
          color={!isKorea ? "white" : "rgba(255, 255, 255, 0.50)"}
          _hover={{ border: "none", color: "white", cursor: "pointer" }}
        >
          ENG
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
