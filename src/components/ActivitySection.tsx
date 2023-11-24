import { Box, Text } from "@chakra-ui/react";
import Logo from "./Icons/Logo";
import Image from "next/image";

const ActivitySection = () => {
  return (
    <Box
      display="flex"
      gap="30px"
      justifyContent="center"
      alignItems="center"
      marginBottom="220px"
      paddingLeft="100px"
      paddingRight="100px"
      width="100%"
    >
      <Box display="grid" gridTemplateColumns="repeat(2, 0fr)" columnGap="30px">
        <Image
          src="/images/activity-sample-1.png"
          width={500}
          height={400}
          alt="Activity 1"
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="500px"
          height="400px"
        >
          <Logo color="black" width="183px" height="32px" />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          width="500px"
          height="400px"
        >
          <Text
            fontSize="24px"
            fontWeight={500}
            color="#7D7D7D"
            marginBottom="16px"
          >
            Title6
          </Text>
          <Text
            fontSize="64px"
            fontWeight={600}
            color="black"
            marginBottom="48px"
          >
            This is Title
            <br /> Lorem Ipsum
          </Text>
          <Text fontSize="16px" fontWeight={400} color="#7D7D7D">
            Lorem ipsum dolor sit amet consectetur.
            <br /> Viverra at urna natoque sed commodo.
            <br /> Cursus neque a integer a felis felis.
          </Text>
        </Box>
        <Image
          src="/images/activity-sample-1.png"
          width={500}
          height={400}
          alt="Activity 1"
        />
      </Box>
      <Image
        src="/images/activity-sample-2.png"
        width={660}
        height={800}
        alt="Activity 2"
      />
    </Box>
  );
};

export default ActivitySection;
