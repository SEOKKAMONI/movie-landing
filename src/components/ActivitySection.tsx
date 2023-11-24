import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import Logo from "./Icons/Logo";
import Image from "next/image";
import { useIsKorea } from "@/store/useIsKorea";

const ActivitySection = () => {
  const { isKorea } = useIsKorea();
  const [isLagerThan1920] = useMediaQuery("(min-width: 1920px)");

  return (
    <Box
      display={isLagerThan1920 ? "flex" : "none"}
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
          <Logo color="353d4a" width="183px" height="32px" />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          width="500px"
          height="400px"
        >
          <Text
            fontSize="64px"
            fontWeight={600}
            color="#353d4a"
            marginBottom="48px"
            lineHeight="150%"
            letterSpacing={-1.92}
          >
            {isKorea ? (
              <p>
                토스 평생 무료송금으로
                <br /> 모두의 금융에 자유를
              </p>
            ) : (
              <p>
                This is Title
                <br /> Lorem Ipsum
              </p>
            )}
          </Text>
          <Text
            fontSize="16px"
            fontWeight={400}
            color="#7D7D7D"
            letterSpacing={-0.48}
          >
            {isKorea ? (
              <p>
                누구에게 보내든 은행 상관 없이,
                <br />
                이제 토스와 함께 수수료 걱정 없이 송금하세요.
              </p>
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur.
                <br /> Viverra at urna natoque sed commodo.
                <br /> Cursus neque a integer a felis felis.
              </p>
            )}
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
