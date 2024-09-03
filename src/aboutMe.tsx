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
  const bgColor = useColorModeValue("brand.cream", "brand.black");
  const textColor = useColorModeValue("brand.deltaBlue", "brand.cream");
  const imageRef = useRef(null);
  const bgGradient = useColorModeValue(
    "linear(to-b, brand.red, brand.cream 50%)",
    "linear(to-b, brand.red, brand.richBlack 0%)"
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
    "rgba(0, 0, 0, 0.1)",
    "rgba(255, 255, 255, 0.1)"
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
              As a Software Developer at ThinkOn Inc., I have been working on
              developing cloud-native applications using a variety of modern
              technologies, including JavaScript, TypeScript, React, Redux,
              Nest.js, Node.js, Git, and Material-UI. In this role, I have been
              able to apply my passion for learning new strategies and
              approaches to solving complex problems.
            </Text>
            <Text mb={4}>
              Throughout my time at ThinkOn, I have contributed to multiple
              projects that have significantly improved the scalability,
              performance, and security of our products and services. For
              example, I created an asynchronous download application that
              reduced the client's download failure rate from 12% to 0%,
              enhancing connection stability and increasing download speeds. I
              have also played a key role in reducing technical debt for 21
              enterprise companies by migrating their front-ends from Angular to
              React, recreating functionality and UI with React using tools like
              Material UI and Lodash.
            </Text>
            <Text mb={4}>
              My most valuable skill is the ability to learn quickly and
              effectively, which allows me to not only meet specific
              requirements but also adapt to various roles within an
              organization. Combined with my strong communication skills and
              willingness to embrace challenges, this makes me a valuable asset
              to any team. Whether I am developing new features, designing
              automated test cases, or onboarding junior developers, I am driven
              by a passion for creating high-quality software solutions that
              exceed client expectations.
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
              alt={`Sirak Radaa - ${colorMode === "light" ? "Day" : "Night"}`}
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
