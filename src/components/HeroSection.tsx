import { Box } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage="url('/images/hero-background.png')"
      width="100%"
      height="100vh"
    />
  );
};

export default HeroSection;
