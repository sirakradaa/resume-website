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
    "linear(to-b, brand.red, brand.cream 78%)",
    "linear(to-b, #6e2f45 0%, #241433 40%, brand.richBlack 100%)"
  );
  const shadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.18)",
    "rgba(243, 243, 186, 0.22)"
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
            spacing={[6, 8, 10]}
            mt={4}
            align="center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <MotionHeading
              as="h1"
              fontSize={["5xl", "6xl", "7xl", "9xl"]}
              fontWeight="normal"
              textAlign="center"
              lineHeight={1}
              letterSpacing="tight"
              color={textColor}
              textShadow={`4px 4px 8px ${shadowColor}`}
            >
              Hi, I'm Sirak
            </MotionHeading>
            <MotionHeading
              as="h1"
              fontSize={["xl", "2xl", "3xl", "4xl"]}
              fontWeight="normal"
              textAlign="center"
              lineHeight={1.25}
              letterSpacing="tight"
              maxWidth="900px"
              color={textColor}
              textShadow={`4px 4px 8px ${shadowColor}`}
            >
              Software engineer doing customer-facing technical work with
              merchants and sales teams.
            </MotionHeading>
          </MotionStack>
          <MotionText
            fontSize={["md", "lg", "xl"]}
            textAlign="center"
            maxWidth="820px"
            color={textColor}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            mb={12}
          >
            JavaScript, TypeScript, React, Node.js, REST, GraphQL, APIs, SaaS
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
