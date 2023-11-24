import { Box, Flex, Text } from "@chakra-ui/react";
import Logo from "./Icons/Logo";
import { useIsKorea } from "@/store/useIsKorea";

const ContactSection = () => {
  const { isKorea } = useIsKorea();

  const handleGoEmail = () => {
    window.open("mailto: gyeom@oriro.kr");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
      backgroundColor="white"
    >
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="40px"
        width="100%"
      >
        <Flex alignItems="center" justifyContent="center">
          <Logo color="black" width="160px" height="28px" />
          <Text
            fontSize="36px"
            fontWeight={600}
            color="black"
            letterSpacing={-1.08}
          >
            {isKorea ? (
              <span>는 여러분의 연락을 기다리고 있습니다</span>
            ) : (
              <span>is waiting to hear from you</span>
            )}
          </Text>
        </Flex>
        <Box
          as="span"
          onClick={handleGoEmail}
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingLeft="56px"
          paddingRight="56px"
          height="50px"
          backgroundColor="black"
          borderRadius="15px"
          fontSize="20px"
          fontWeight={400}
          color="white"
          _hover={{ cursor: "pointer" }}
        >
          {isKorea ? <span>연락하기</span> : <span>Contact</span>}
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactSection;
