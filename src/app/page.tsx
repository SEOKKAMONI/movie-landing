"use client";

import ActivitySection from "@/components/ActivitySection";
import CardSection from "@/components/CardSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Logo from "@/components/Icons/Logo";
import WordSection from "@/components/WordSection";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Header />
      <Box width="100vw">
        {/* 히어로 섹션 */}
        <HeroSection />
        {/* 카드 섹션 */}
        <CardSection />
        {/* 활동 섹션 */}
        <ActivitySection />
        {/* 한 마디 섹션 */}
        <WordSection />
      </Box>
    </>
  );
};

export default Home;
