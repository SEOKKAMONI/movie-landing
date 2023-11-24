import { useIsKorea } from "@/store/useIsKorea";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const CardSection = () => {
  const { isKorea } = useIsKorea();

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
      <Flex gap="84px" alignItems="flex-start" marginBottom="250px">
        <Image
          src="/images/card-sample.png"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            borderRadius: "24px",
          }}
          width={320}
          height={500}
          alt="Card"
        />
        <Flex flexDirection="column" alignItems="flex-start" paddingTop="36px">
          <Text
            fontSize="40px"
            lineHeight="110%"
            fontWeight={600}
            color="#353d4a"
            marginBottom="36px"
            letterSpacing={-1.08}
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
            marginBottom="64px"
            lineHeight="150%"
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
        </Flex>
      </Flex>
      {/* 카드 2 */}
      <Flex gap="84px" alignItems="flex-start">
        <Flex flexDirection="column" alignItems="flex-start" paddingTop="36px">
          <Text
            lineHeight="110%"
            fontSize="40px"
            fontWeight={600}
            color="#353d4a"
            marginBottom="36px"
            letterSpacing={-1.08}
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
            marginBottom="64px"
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
        </Flex>
        <Image
          src="/images/card-sample.png"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            borderRadius: "24px",
          }}
          width={320}
          height={500}
          alt="Card"
        />
      </Flex>
    </Box>
  );
};

export default CardSection;
