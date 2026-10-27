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
import Shopify from "./assets/shopify.png";
import Outlier from "./assets/outlier.svg";
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
    company: "Shopify",
    role: "Senior Developer Support",
    duration: "June 2025 - Present",
    description: [
      "Resolved 80+ complex support cases per quarter across custom Shopify apps, storefronts, and integrations in JavaScript, TypeScript, React, Node.js, REST, Observe, and GraphQL.",
      "Reduced repeat incidents by about 15% by tracing recurring API and platform bugs back to the shared implementation pattern.",
      "Supported Enterprise merchants representing millions in GMV and cut escalated resolution time by about 20%.",
      "Partnered with Engineering, Legal, Sales, and Product on 10–15 escalations a month, with reproductions and logs that sped up bug triage.",
      "Kept 2–4 live support conversations going at once without dropping the technical details.",
      "Wrote 15+ troubleshooting guides and escalation playbooks for the issues that kept coming back.",
    ],
    image: Shopify,
    technologies: ["JavaScript", "TypeScript", "React", "Node.js", "GraphQL", "REST"],
    link: "https://www.shopify.com",
  },
  {
    company: "ThinkOn",
    role: "Software Engineer",
    duration: "April 2024 - June 2025",
    description: [
      "Cut backend reset times by 95% by fixing a bug that fired on every code save.",
      "Lowered AWS S3 storage costs by 90% with client-specific buckets for 300+ enterprise clients.",
      "Shortened releases by shipping APIs, caching, and refactors through a GitLab CI/CD pipeline.",
      "Raised data speeds about 100x, from roughly 100 KB/s to 10 MB/s, and cleared a 12% error rate with a batch processing microservice.",
      "Improved code quality by 20% through reviews of work from 3+ engineers.",
    ],
    image: ThinkOn,
    technologies: ["JavaScript", "TypeScript", "Node.js", "React", "Java", "AWS", "SQL"],
    link: "https://thinkon.com",
  },
  {
    company: "ThinkOn",
    role: "Junior Software Engineer",
    duration: "June 2022 - April 2024",
    description: [
      "Cut manual frontend testing by 24% with a Cypress setup for a Material UI migration.",
      "Built 60+ frontend and backend microservice features, with caching that took pressure off the servers.",
      "Moved the frontend from Angular to React and reduced bugs by 20% for 300+ enterprise clients.",
      "Added OAuth 2.0 with Azure so people could back up Microsoft 365 data.",
      "Shipped 15+ backup features for Exchange, OneDrive, SharePoint, and Teams, and adapted 20 APIs to Veeam updates.",
    ],
    image: ThinkOn,
    technologies: ["TypeScript", "React", "Node.js", "Cypress", "Azure", "Java"],
    link: "https://thinkon.com",
  },
  {
    company: "Outlier",
    role: "Freelance Software Engineer",
    duration: "January 2024 - Present",
    description: [
      "Reviewed 700+ AI-generated responses and marked where the prompt or the answer went off the rails.",
      "Made anomaly detection more reliable across Python, JavaScript, Java, C#, C++, and Kotlin.",
      "Fixed 400+ pieces of AI-generated code in Python, JavaScript, Java, TypeScript, Kotlin, C#, and C++.",
    ],
    image: Outlier,
    technologies: ["Python", "JavaScript", "TypeScript", "Java", "Kotlin", "C#"],
    link: "https://outlier.ai",
  },
];

const MotionBox = motion(Box);

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgGradient = useColorModeValue(
    "linear(to-t, #fff6d6, brand.red 78%)",
    "linear(to-t, #fff4cc, #f0b79a 62%)"
  );
  const titleTextColor = useColorModeValue("brand.deltaBlue", "brand.cream");
  const cardTextColor = useColorModeValue("brand.deltaBlue", "brand.deltaBlue");
  const popUpTextColor = useColorModeValue("brand.deltaBlue", "brand.cream");
  const shadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.14)",
    "rgba(243, 243, 186, 0.16)"
  );
  const modalBg = useColorModeValue("#fffaf0", "#161022");
  const buttonColor = useColorModeValue("brand.red", "brand.lighterBlue");
  const buttonTextColor = useColorModeValue("white", "white");
  const tagColor = useColorModeValue("brand.cream", "brand.deltaBlue");

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
          <Text fontWeight="bold" fontSize="md" textColor={cardTextColor}>
            {experience.role}
          </Text>
          <Text fontSize="sm" mb={2} textColor={cardTextColor}>
            {experience.duration}
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
