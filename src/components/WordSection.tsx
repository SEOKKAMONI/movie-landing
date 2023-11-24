import { Box, Text } from "@chakra-ui/react";

const WordSection = () => {
  return (
    <Box
      position="relative"
      backgroundImage="url('/images/word-background.png')"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      width="100%"
      height="100vh"
    >
      <Text
        position="absolute"
        left={148}
        bottom={108}
        fontFamily="var(--font-archivo-black)"
        fontSize="110px"
        fontWeight={400}
        color="white"
        lineHeight="100px"
        letterSpacing={-3.3}
      >
        This is
        <br /> Lorem Ipsum
      </Text>
    </Box>
  );
};

export default WordSection;
