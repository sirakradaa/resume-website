import React from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  Link,
  Tag,
  Wrap,
  Container,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import ThinkOn from "./assets/thinkon.png";
import { AnimatePresence, motion } from "framer-motion";

interface Experience {
  company: string;
  role: string;
  duration: string;
  image: string;
  description: string[];
  technologies: string[];
  link: string;
}

const experiences: Experience[] = [
  {
    company: "ThinkOn Inc.",
    role: "Junior Software Engineer",
    duration: "June 2022 - April 2024",
    description: [
      "Developed 15+ features for a distributed backup platform, adapting 20 APIs to Veeam updates, improving data integration and reducing upgrade time by 25%, using TypeScript, JavaScript, Node.js, React, Java, and MySQL.",
      "Maintain 100% uptime by resolving all incidents and outages during SRE rotations.",
      "Engineered a batch processing system, using asynchronous processing to prep downloads, eliminating a 12% error rate and increasing data speeds.",
      "Architected and built 60+ scalable features across microservices, enhancing user engagement and reducing server load with effective caching, using TypeScript, JavaScript, Node.js, and REST APIs.",
    ],
    image: ThinkOn,
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Node.js",
      "Nest.js",
      "Cypress",
      "Material UI",
      "Lodash",
      "HTML/CSS",
      "SQL",
      "Git",
      "Docker",
    ],
    link: "https://thinkon.com",
  },
  {
    company: "ThinkOn Inc.",
    role: "Intermediate Software Engineer",
    duration: "April 2024 - Present",
    description: [
      "Reduced technical debt for 21 enterprise clients by migrating from Angular to React, decreasing bugs by 20% and simplifying maintenance with Material UI and TypeScript.",
      "Set up an automated testing environment with Cypress for Material UI migration, cutting manual testing by 24%.",
      "Implemented OAuth 2.0 for secure user authentication and error handling measures using MSAL.",
      "Collaborate closely with Product and QA teams on project planning, feature requirements, and bug resolution.",
    ],
    image: ThinkOn,
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Node.js",
      "Nest.js",
      "Cypress",
      "Material UI",
      "Lodash",
      "HTML/CSS",
      "SQL",
      "Git",
      "Docker",
    ],
    link: "https://thinkon.com",
  },
];

const MotionBox = motion(Box);

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgGradient = useColorModeValue(
    "linear(to-t, brand.cream, brand.beaver 50%)",
    "linear(to-b, brand.cream, brand.red 100%)"
  );
  const titleTextColor = useColorModeValue("brand.white", "brand.deltaBlue");
  const cardTextColor = useColorModeValue("brand.deltaBlue", "brand.deltaBlue");
  const popUpTextColor = useColorModeValue("brand.cream", "brand.deltaBlue");
  const shadowColor = useColorModeValue(
    "rgba(255, 255, 255, 0.1)",
    "rgba(0, 0, 0, 0.1)"
  );
  const modalBg = useColorModeValue("brand.richBlack", "white");
  const buttonColor = useColorModeValue("brand.lighterBlue", "brand.yinMnBlue");
  const buttonTextColor = useColorModeValue("white", "white");
  const tagColor = useColorModeValue("brand.deltaBlue", "brand.cream");

  return (
    <>
      <MotionBox
        onClick={onOpen}
        cursor="pointer"
        borderRadius="lg"
        overflow="hidden"
        bgGradient={bgGradient}
        p={6}
        boxShadow={`2px 2px 6px 6px ${shadowColor}`}
        transition="all 0.3s ease-in-out"
        _hover={{
          transform: "translateY(-10px)",
          boxShadow: `0 12px 24px ${shadowColor}`,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        position="relative"
      >
        <ExternalLinkIcon
          position="absolute"
          top={2}
          right={2}
          boxSize={5}
          color={cardTextColor}
        />
        <Image src={experience.image} alt={experience.company} width="100%" />
        <Box p={4}>
          <Text
            fontWeight="bold"
            fontSize="lg"
            mb={2}
            textColor={cardTextColor}
          >
            {experience.company}
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Text fontWeight="bold" fontSize="md" textColor={cardTextColor}>
              {experience.role}
            </Text>
            <Text fontWeight="bold" fontSize="md" textColor={cardTextColor}>
              {experience.duration}
            </Text>
          </Box>
          <Wrap>
            {experience.technologies.map((tech, index) => (
              <Tag
                key={index}
                size="sm"
                colorScheme="blue"
                textColor={cardTextColor}
              >
                {tech}
              </Tag>
            ))}
          </Wrap>
        </Box>
      </MotionBox>
      <AnimatePresence>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: "0.3" }}
              bg={modalBg}
            >
              <ModalHeader textColor={titleTextColor}>
                {experience.company}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack align="start" spacing={4}>
                  <Image
                    src={experience.image}
                    alt={experience.company}
                    borderRadius="md"
                  />
                  <Text
                    fontWeight="bold"
                    fontSize="lg"
                    textColor={titleTextColor}
                  >
                    {experience.role}
                  </Text>
                  <List spacing={2} mt={2}>
                    {experience.description.map((desc, i) => (
                      <ListItem key={i} textColor={popUpTextColor}>
                        <ListIcon as={ArrowForwardIcon} color="green.500" />
                        {desc}
                      </ListItem>
                    ))}
                  </List>
                  <Text
                    fontWeight="bold"
                    fontSize="lg"
                    textColor={titleTextColor}
                  >
                    Technologies Used:
                  </Text>
                  <Wrap>
                    {experience.technologies.map((tech, index) => (
                      <Tag
                        key={index}
                        size="md"
                        textColor={popUpTextColor}
                        bg={tagColor}
                      >
                        {tech}
                      </Tag>
                    ))}
                  </Wrap>
                  <Box
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    mt={4}
                  >
                    <Button
                      as={Link}
                      href={experience.link}
                      isExternal
                      bg={buttonColor}
                      color={buttonTextColor}
                      rightIcon={<ExternalLinkIcon />}
                    >
                      View Company Site
                    </Button>
                  </Box>
                </VStack>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export const ExperienceGallery = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <SimpleGrid columns={[1, 1, 2]} spacing={6}>
        {experiences.map((project, index) => (
          <ExperienceCard key={index} experience={project} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ExperienceGallery;
