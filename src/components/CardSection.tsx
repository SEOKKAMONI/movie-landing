import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const CardSection = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingTop="220px"
      paddingBottom="220px"
      width="100%"
    >
      {/* 카드 1 */}
      <Flex gap="64px" alignItems="flex-start" marginBottom="250px">
        <Image
          src="/images/card-sample.png"
          width={320}
          height={500}
          alt="Card"
        />
        <Flex flexDirection="column" alignItems="flex-start" paddingTop="36px">
          <Text
            fontSize="36px"
            lineHeight="130%"
            fontWeight={600}
            color="353d4a"
            marginBottom="36px"
            letterSpacing={-1.08}
          >
            This is Title
            <br /> Lorem Ipsum
          </Text>
          <Text
            fontSize="16px"
            fontWeight={400}
            color="#7D7D7D"
            marginBottom="64px"
            lineHeight="150%"
            letterSpacing={-0.48}
          >
            Lorem ipsum dolor sit amet consectetur.
            <br /> Viverra at urna natoque sed commodo.
            <br /> Cursus neque a integer a felis felis.
          </Text>
        </Flex>
      </Flex>
      {/* 카드 2 */}
      <Flex gap="64px" alignItems="flex-start">
        <Flex flexDirection="column" alignItems="flex-start" paddingTop="36px">
          <Text
            lineHeight="130%"
            fontSize="36px"
            fontWeight={600}
            color="353d4a"
            marginBottom="36px"
            letterSpacing={-1.08}
          >
            This is Title
            <br /> Lorem Ipsum
          </Text>
          <Text
            fontSize="16px"
            fontWeight={400}
            color="#7D7D7D"
            marginBottom="64px"
            letterSpacing={-0.48}
          >
            Lorem ipsum dolor sit amet consectetur.
            <br /> Viverra at urna natoque sed commodo.
            <br /> Cursus neque a integer a felis felis.
          </Text>
        </Flex>
        <Image
          src="/images/card-sample.png"
          width={320}
          height={500}
          alt="Card"
        />
      </Flex>
    </Box>
  );
};

export default CardSection;
