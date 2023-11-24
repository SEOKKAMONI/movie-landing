"use client";

import ActivitySection from "@/components/ActivitySection";
import CardSection from "@/components/CardSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Logo from "@/components/Icons/Logo";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Header />
      <Box width="100vw">
        {/* 히어로 페이지 */}
        <HeroSection />
        {/* 카드 페이지 */}
        <CardSection />
        {/* 활동 페이지 */}
        <ActivitySection />
      </Box>
    </>
  );
};

export default Home;
