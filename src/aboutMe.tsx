import React, { useEffect, useRef } from "react";
import {
  Box,
  Text,
  Container,
  Image,
  useColorModeValue,
  Heading,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import anime from "animejs/lib/anime.es.js";
import styled, { keyframes } from "styled-components";
import FloatingShapes from "./components/floatingShapes";
import { motion } from "framer-motion";
import SirakDay from "./assets/sirakDay.png";
import SirakNight from "./assets/sirakNight.png";

const MotionHeading = motion(Heading);

const risingSmokeAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
`;

const Smoke = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/api/placeholder/400/400") no-repeat center center;
  background-size: cover;
  opacity: 0.5;
  animation: ${risingSmokeAnimation} 5s infinite;
`;

const AboutMe = () => {
  const bgColor = useColorModeValue("brand.cream", "brand.richBlack");
  const textColor = useColorModeValue("brand.deltaBlue", "brand.cream");
  const imageRef = useRef(null);
  const bgGradient = useColorModeValue(
    "linear(to-b, brand.red, brand.cream 50%)",
    "linear(to-b, #6e2f45 0%, #241433 40%, brand.richBlack 100%)"
  );

  const { colorMode } = useColorMode();
  const sirakImage = useColorModeValue(SirakDay, SirakNight);

  useEffect(() => {
    if (imageRef.current) {
      anime({
        targets: imageRef.current,
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 2000,
        easing: "easeInOutExpo",
        delay: 500,
      });
    }
  }, []);

  const shadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.12)",
    "rgba(243, 243, 186, 0.16)"
  );

  return (
    <Box
      bg={bgColor}
      bgGradient={bgGradient}
      textColor={textColor}
      py={20}
      minHeight="100vh"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      id="about"
    >
      <FloatingShapes />
      <Container
        maxW="container.xl"
        display="flex"
        flexDirection="column"
        flexGrow={1}
      >
        <MotionHeading
          as="h1"
          fontSize={["4xl", "5xl", "6xl"]}
          textAlign="center"
          mb={[8, 10, 12]}
          color={textColor}
          fontWeight="normal" // Assuming you're using a decorative font
          lineHeight="1.2"
          letterSpacing="tight"
          textShadow={`2px 2px 4px ${shadowColor}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          About Me
        </MotionHeading>
        <Flex
          direction={["column", "column", "row"]}
          flexGrow={1}
          alignItems="flex-start"
          mt={[4, 6, 8]}
        >
          <Box flex="1" pr={[0, 0, 10]} pb={[5, 5, 0]}>
            <Text mb={4}>
              I'm a Senior Developer Support engineer at Shopify, working
              remotely from Edmonton. I dig through logs, code, and errors to
              unblock live stores, then write the guide so the next person
              doesn't have to start from zero. JavaScript, TypeScript, React,
              Node.js, REST, and GraphQL are the tools I reach for most.
            </Text>
            <Text mb={4}>
              Before Shopify I spent three years at ThinkOn, a SaaS data
              company. I started as a junior engineer in 2022 and became a
              software engineer in 2024. The fun problems were the stubborn
              ones: a frontend move from Angular to React, a download path that
              failed 12% of the time, and Microsoft 365 backups wired up with
              OAuth and Azure.
            </Text>
            <Text mb={4}>
              I also freelance with Outlier, reviewing AI-generated code in
              Python, JavaScript, Java, TypeScript, Kotlin, C#, and C++. I
              studied Computer Science at the University of Alberta, and I'm a
              Professional Scrum Master. The skill I trust most is learning
              fast and explaining what I found.
            </Text>
          </Box>
          <Box
            flex="1"
            display="flex"
            justifyContent="flex-end"
            position="relative"
          >
            <Image
              w={["100%", "100%", "80%", "60%"]}
              ref={imageRef}
              borderRadius="2xl"
              src={sirakImage}
              alt={`Sirak Radaa - ${colorMode === "dark" ? "Night" : "Day"}`}
              opacity="0"
              transform="translateY(-50px)"
            />
            <Smoke />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutMe;
