import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Logo from "../Icons/Logo";
import Facebook from "../Icons/Facebook";
import Twitter from "../Icons/Twitter";
import Instagram from "../Icons/Instagram";
import Youtube from "../Icons/Youtube";

const Footer = () => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      padding="64px 100px 38px 100px"
      width="100vw"
      backgroundColor="black"
    >
      <Flex flexDirection="column" alignItems="flex-start" marginRight="150px">
        <Logo color="white" width="183px" height="32px" />
        <Text fontSize="16px" fontWeight={500} marginTop="20px" color="white">
          오리오 스튜디오
        </Text>
        <Text fontSize="16px" fontWeight={500} marginTop="48px" color="white">
          gyeom@oriro.kr
        </Text>
      </Flex>
      <Flex flexDirection="column" gap="16px" alignItems="flex-start">
        <Text fontSize="16px" fontWeight={500} color="white">
          FOLLOW US
        </Text>
        <Flex alignItems="center" gap="12px">
          <Facebook />
          <Twitter />
          <Instagram />
          <Youtube />
        </Flex>
      </Flex>
      <Spacer />
      <Text fontSize="36px" fontWeight={600} color="white">
        We are the proof of your
        <br />
        sense of humor.
      </Text>
    </Box>
  );
};

export default Footer;
