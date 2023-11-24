"use client";

import Header from "@/components/Header";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Header />
      <Box width="100vw">
        {/* 히어로 페이지 */}
        <Box
          backgroundSize="cover"
          backgroundImage="url('/images/hero-background.png')"
          width="100%"
          height="100vh"
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          paddingTop="220px"
          paddingBottom="220px"
          width="100%"
        >
          {/* Card 1 */}
          <Flex gap="64px" alignItems="flex-start" marginBottom="280px">
            <Image
              src="/images/card-sample.png"
              width={320}
              height={500}
              alt="Card"
            />
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              paddingTop="36px"
            >
              <Text
                fontSize="20px"
                fontWeight={500}
                color="#7D7D7D"
                marginBottom="16px"
              >
                Title1
              </Text>
              <Text
                fontSize="36px"
                fontWeight={600}
                color="black"
                marginBottom="36px"
              >
                This is Title
                <br /> Lorem Ipsum
              </Text>
              <Text
                fontSize="16px"
                fontWeight={400}
                color="#7D7D7D"
                marginBottom="64px"
              >
                Lorem ipsum dolor sit amet consectetur.
                <br /> Viverra at urna natoque sed commodo.
                <br /> Cursus neque a integer a felis felis.
              </Text>
              <Box
                as="span"
                display="flex"
                alignItems="center"
                paddingLeft="32px"
                paddingRight="32px"
                border="1px solid"
                borderColor="black"
                fontSize="14px"
                fontWeight={400}
                color="black"
                height="36px"
              >
                VIEW MORE
              </Box>
            </Flex>
          </Flex>
          {/* Card 2 */}
          <Flex gap="64px" alignItems="flex-start">
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              paddingTop="36px"
            >
              <Text
                fontSize="20px"
                fontWeight={500}
                color="#7D7D7D"
                marginBottom="16px"
              >
                Title1
              </Text>
              <Text
                fontSize="36px"
                fontWeight={600}
                color="black"
                marginBottom="36px"
              >
                This is Title
                <br /> Lorem Ipsum
              </Text>
              <Text
                fontSize="16px"
                fontWeight={400}
                color="#7D7D7D"
                marginBottom="64px"
              >
                Lorem ipsum dolor sit amet consectetur.
                <br /> Viverra at urna natoque sed commodo.
                <br /> Cursus neque a integer a felis felis.
              </Text>
              <Box
                as="span"
                display="flex"
                alignItems="center"
                paddingLeft="32px"
                paddingRight="32px"
                border="1px solid"
                borderColor="black"
                fontSize="14px"
                fontWeight={400}
                color="black"
                height="36px"
              >
                VIEW MORE
              </Box>
            </Flex>
            <Image
              src="/images/card-sample.png"
              width={320}
              height={500}
              alt="Card"
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Home;
