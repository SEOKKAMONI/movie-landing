import { useIsKorea } from "@/store/useIsKorea";
import { Box, Text } from "@chakra-ui/react";

const WordSection = () => {
  const { isKorea } = useIsKorea();

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
        color="#f9fafb"
        lineHeight="100px"
        letterSpacing={-3.3}
      >
        {isKorea ? (
          <p>
            토스와 함께
            <br /> 모두의 금융에 자유를
          </p>
        ) : (
          <p>
            This is
            <br /> Lorem Ipsum
          </p>
        )}
      </Text>
    </Box>
  );
};

export default WordSection;
