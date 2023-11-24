import { Box, Text, useMediaQuery } from "@chakra-ui/react";

const WordSection = () => {
  const [isLagerThan1440] = useMediaQuery("(min-width: 1440px)");

  return (
    <Box
      position="relative"
      backgroundImage="url('/images/word-background.png')"
      width="100%"
      height="100vh"
    >
      <Text
        position="absolute"
        left={148}
        bottom={108}
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
