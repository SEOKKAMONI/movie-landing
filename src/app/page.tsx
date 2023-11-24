"use client";

import Header from "@/components/Header";
import { Box } from "@chakra-ui/react";

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
        ></Box>
      </Box>
    </>
  );
};

export default Home;
