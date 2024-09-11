import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  useColorModeValue,
  VStack,
  Flex,
  useToast,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SkillsList } from "./assets/images";
import { motion } from "framer-motion";
import FloatingShapes from "./components/floatingShapes";

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

interface Skill {
  name: string;
  logo: string;
  professionalExperience: string;
  personalExperience: string;
}

const HexagonCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isTapped, setIsTapped] = React.useState(false);
  const [isRotated, setIsRotated] = React.useState(false);
  const textColor = useColorModeValue("brand.yinMnBlue", "brand.deltaBlue");
  const gradientStartColor = useColorModeValue("brand.cream", "brand.cream");
  const gradientEndColor = useColorModeValue("brand.beaver", "brand.red");

  const softness = Math.min(index * 20 + 50, 90);
  const bgCardGradient = `linear(to-t, ${gradientStartColor}, ${gradientEndColor} ${softness}%)`;

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered || isTapped) {
      timer = setTimeout(() => setIsRotated(true), 100);
    } else {
      timer = setTimeout(() => setIsRotated(false), 100);
    }
    return () => clearTimeout(timer);
  }, [isHovered, isTapped]);

  const handleTap = () => {
    setIsTapped(!isTapped);
  };

  return (
    <MotionBox
      whileHover={{ scale: 1.05, zIndex: 2 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      position="relative"
      width="200px"
      height="230px"
      margin={index % 2 === 0 ? "0 -20px 40px 0" : "40px -20px 0 0"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTap={handleTap}
    >
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient={bgCardGradient}
        clipPath="polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
        animate={{ rotate: isRotated ? 30 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      <Flex
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        padding="15px"
        textAlign="center"
        zIndex="1"
      >
        <MotionBox
          initial={false}
          animate={{ opacity: isRotated ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          position="absolute"
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={skill.logo}
            alt={skill.name}
            boxSize="80px"
            objectFit="contain"
            mb={3}
          />
          <Text fontWeight="bold" fontSize="md" color={textColor}>
            {skill.name}
          </Text>
        </MotionBox>
        <MotionBox
          initial={false}
          animate={{ opacity: isRotated ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          position="absolute"
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="sm" color={textColor} mb={2}>
            Professional: {skill.professionalExperience}
          </Text>
          <Text fontSize="sm" color={textColor} mb={2}>
            Personal: {skill.personalExperience}
          </Text>
        </MotionBox>
      </Flex>
    </MotionBox>
  );
};

const Skills = () => {
  const bgColor = useColorModeValue("brand.richBlack", "brand.cream");
  const textColor = useColorModeValue("brand.cream", "brand.deltaBlue");
  const bgGradient = useColorModeValue(
    "linear(to-b, brand.red, brand.richBlack 0%)",
    "linear(to-b, brand.red, brand.cream 50%)"
  );
  const shadowColor = useColorModeValue(
    "rgba(255, 255, 255, 0.1)",
    "rgba(0, 0, 0, 0.1)"
  );

  const toast = useToast();
  const isMobileOrTablet = useBreakpointValue({ base: true, lg: false });
  const [hasShownToast, setHasShownToast] = useState(false);

  useEffect(() => {
    if (isMobileOrTablet && !hasShownToast) {
      const toastId = toast({
        title: "Tip",
        description: "Tap cards for details",
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "bottom",
        variant: "subtle",
        containerStyle: {
          maxWidth: "200px",
          fontSize: "14px",
          opacity: 0.8,
        },
      });
      setHasShownToast(true);

      return () => {
        if (toastId) toast.close(toastId);
      };
    }
  }, [isMobileOrTablet, toast, hasShownToast]);

  return (
    <Box
      bg={bgColor}
      bgGradient={bgGradient}
      color={textColor}
      py={20}
      minHeight="100vh"
      position="relative"
      overflow="hidden"
      id="skills"
    >
      <FloatingShapes />
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <MotionHeading
            as="h1"
            fontSize={["4xl", "5xl", "6xl"]}
            textAlign="center"
            color={textColor}
            fontWeight="normal"
            lineHeight="1.2"
            letterSpacing="tight"
            textShadow={`2px 2px 4px ${shadowColor}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            My Skills
          </MotionHeading>
          <Flex
            justifyContent="center"
            flexWrap="wrap"
            mx="-20px"
            sx={{
              "& > div": {
                margin: "20px",
              },
            }}
          >
            {SkillsList.map((skill, index) => (
              <HexagonCard key={index} skill={skill} index={index} />
            ))}
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default Skills;
