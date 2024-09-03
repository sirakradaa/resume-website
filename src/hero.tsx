import React from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import FloatingShapes from "./components/floatingShapes";
import ExperienceGallery from "./experienceCard";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionStack = motion(Stack);

const Hero = () => {
  const textColor = useColorModeValue("brand.deltaBlue", "brand.cream");
  const bgColor = useColorModeValue("brand.cream", "brand.richBlack");
  const bgGradient = useColorModeValue(
    "linear(to-b, brand.red, brand.cream 80%)",
    "linear(to-b, brand.red, brand.richBlack 0%)"
  );
  const shadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.2)",
    "rgba(255, 255, 255, 0.2)"
  );

  return (
    <Box
      bg={bgColor}
      bgGradient={bgGradient}
      textColor={textColor}
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      position="relative"
      overflow="hidden"
      id="hero"
    >
      <FloatingShapes />
      <Container
        maxW="container.xl"
        pt={[20, 24, 28, 32]}
        pb={20}
        position="relative"
        zIndex={1}
      >
        <VStack spacing={8} align="center">
          <MotionStack
            spacing={[6, 8, 10]} // Increased spacing between lines
            mt={4}
            align="center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <MotionHeading
              as="h1"
              fontSize={["5xl", "6xl", "7xl", "8xl"]} // Increased font sizes
              fontWeight="normal"
              textAlign="center"
              lineHeight={1}
              letterSpacing="tight"
              color={textColor}
              textShadow={`4px 4px 8px ${shadowColor}`} // Increased shadow for better visibility
            >
              Hi, I'm Sirak
            </MotionHeading>
            <MotionHeading
              as="h1"
              fontSize={["4xl", "5xl", "6xl", "7xl"]} // Increased font sizes
              fontWeight="normal"
              textAlign="center"
              lineHeight={1}
              letterSpacing="tight"
              color={textColor}
              textShadow={`4px 4px 8px ${shadowColor}`} // Increased shadow for better visibility
            >
              A Software Developer
            </MotionHeading>
          </MotionStack>
          <MotionText
            fontSize={["lg", "xl", "2xl"]}
            textAlign="center"
            maxWidth="800px"
            color={textColor}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            mb={12}
          >
            I am a dedicated software developer with a strong focus on creating
            efficient and user-friendly web applications. My experience spans
            various technologies, and I'm committed to continuous learning and
            delivering high-quality solutions.
          </MotionText>
          <Box width="100%">
            <MotionHeading
              as="h3"
              mt={6}
              fontSize={["2xl", "3xl", "4xl"]}
              fontWeight="medium"
              textAlign="center"
              lineHeight="1.2"
              letterSpacing="tight"
              color={textColor}
              textShadow={`2px 2px 4px ${shadowColor}`}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              mb={8}
            >
              Work Experience
            </MotionHeading>
            <ExperienceGallery />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
