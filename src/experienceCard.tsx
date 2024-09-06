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
import {
  ArrowForwardIcon,
  ExternalLinkIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
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
    role: "Software Developer",
    duration: "June 2022 - Present",
    description: [
      "Created an asynchronous download application using JavaScript, TypeScript, and React for the front-end, along with Node.js and Nest.js for the back-end, reducing the client’s download failure rate from 12% to 0%. This improvement significantly enhanced connection stability and increased download speeds by optimizing the data and file storage environment",
      "Reduced technical debt for 21 enterprise companies by migrating the front-end from Angular to React, recreating Angular functionality and UI with React using Material UI and Lodash",
      "Designed automated test cases using Cypress testing framework for a high-profile migration project, transitioning from HTML/CSS to Material UI, which contributed to a 33% increase in revenue growth in 2023",
      "Conducted manual testing to identify and verify bugs reported by customers and developers, resolving 50% of the identified issues",
      "Documented an onboarding manual for new developers, reducing onboarding time by 33%. Also onboarded junior and intermediate developers, providing ongoing training and support post-onboarding",
      "Participated in a 24/7 on-call rotations for 1 week every 5 months",
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
    "linear(to-b, brand.cream, brand.red 100%)",
    "linear(to-t, brand.cream, brand.beaver 50%)"
  );
  const titleTextColor = useColorModeValue("brand.deltaBlue", "brand.white");
  const cardTextColor = useColorModeValue("brand.deltaBlue", "brand.deltaBlue");
  const popUpTextColor = useColorModeValue("brand.deltaBlue", "brand.cream");
  const shadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.1)",
    "rgba(255, 255, 255, 0.1)"
  );

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
                  <List spacing={2} mt={2}>
                    {experience.description.map((desc, i) => (
                      <ListItem key={i} textColor={popUpTextColor}>
                        <ListIcon as={ArrowForwardIcon} color="green.500" />
                        {desc}
                      </ListItem>
                    ))}
                  </List>
                  <Text fontWeight="bold" fontSize="lg">
                    Technologies Used:
                  </Text>
                  <Wrap>
                    {experience.technologies.map((tech, index) => (
                      <Tag key={index} size="md" textColor={popUpTextColor}>
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
                      colorScheme="blue"
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
