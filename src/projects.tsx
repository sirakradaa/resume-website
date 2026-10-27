import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  Tag,
  Wrap,
  Link,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import FloatingShapes from "./components/floatingShapes";
import { ProjectsImages } from "./assets/images";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const cardBg = useColorModeValue("brand.cream", "brand.cream");
  const buttonColor = useColorModeValue("brand.red", "brand.yinMnBlue");
  const textColor = useColorModeValue("brand.deltaBlue", "brand.deltaBlue");
  const buttonTextColor = useColorModeValue("white", "white");
  const gradientStartColor = useColorModeValue("brand.cream", "#fff6d6");
  const gradientEndColor = useColorModeValue("brand.red", "#f0b79a");

  // Calculate the softness of the gradient based on the index
  const softness = Math.min(index * 40 + 40, 90); // Increase softness by 10% for each card, max 90%

  const bgCardGradient = `linear(to-t, ${gradientStartColor}, ${gradientEndColor} ${softness}%)`;

  const isEven = index % 2 === 0;

  return (
    <MotionBox
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      w="100%"
    >
      <Flex
        direction={isEven ? "row" : "row-reverse"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box width="60%" pr={isEven ? 8 : 0} pl={isEven ? 0 : 8}>
          <Image src={project.logo} alt={project.name} borderRadius="md" />
        </Box>
        <Box
          width="60%"
          bg={cardBg}
          bgGradient={bgCardGradient}
          p={6}
          borderRadius="lg"
          boxShadow="xl"
        >
          <VStack spacing={4} align="stretch">
            <Heading as="h3" size="md" color={textColor}>
              {project.name}
            </Heading>
            <Text fontSize="sm" color={textColor}>
              {project.description}
            </Text>
            <Wrap>
              {project.technologies.map((tech: any, index: number) => (
                <Tag key={index} size="sm" color={textColor}>
                  {tech}
                </Tag>
              ))}
            </Wrap>
            <Link href={project.link} isExternal>
              <Button
                rightIcon={<ExternalLinkIcon />}
                bg={buttonColor}
                color={buttonTextColor}
                size="sm"
              >
                View Project
              </Button>
            </Link>
          </VStack>
        </Box>
      </Flex>
    </MotionBox>
  );
};

export const Projects = () => {
  const bgColor = useColorModeValue("brand.cream", "brand.richBlack");
  const textColor = useColorModeValue("brand.deltaBlue", "brand.cream");
  const bgGradient = useColorModeValue(
    "linear(to-b, brand.red, brand.cream 50%)",
    "linear(to-b, #6e2f45 0%, #241433 40%, brand.richBlack 100%)"
  );
  const shadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.12)",
    "rgba(243, 243, 186, 0.16)"
  );

  return (
    <Box
      bg={bgColor}
      bgGradient={bgGradient}
      color={textColor}
      py={20}
      minHeight="100vh"
      position="relative"
      overflow="hidden"
      id="projects"
    >
      <FloatingShapes />
      <Container maxW="container.xl">
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
          My Projects
        </MotionHeading>
        <VStack spacing={20} align="stretch">
          {ProjectsImages.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </VStack>
      </Container>
    </Box>
  );
};
