import React, { useState, useMemo } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  useColorModeValue,
  Text,
  Flex,
  Icon,
  useToast,
  Link,
  keyframes,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import FloatingShapes from "./components/floatingShapes";

const MotionBox = motion(Box);

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const toast = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_g5ozg4x",
        "template_2ee627a",
        formData,
        "JVMgmJAGiLl3bE6Da"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Message sent!",
            description: "Thanks for reaching out. I'll get back to you soon!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  const bgColor = useColorModeValue("brand.richBlack", "brand.cream");
  const textColor = useColorModeValue("brand.cream", "brand.deltaBlue");
  const buttonBackgroundColor = useColorModeValue(
    "brand.deltaBlue",
    "brand.red"
  );
  const buttonText = useColorModeValue("brand.cream", "brand.cream");
  const buttonHighlightBackground = useColorModeValue(
    "brand.red",
    "brand.deltaBlue"
  );
  const bgGradient = useColorModeValue(
    "linear(to-b, brand.red, brand.richBlack 0%)",
    "linear(to-b, brand.red, brand.cream 50%)"
  );
  const iconColor = useColorModeValue("brand.cream", "brand.deltaBlue");

  const inputStyles = {
    border: "none",
    borderBottom: "2px solid",
    borderColor: useColorModeValue("brand.cream", "brand.deltaBlue"),
    borderRadius: "0",
    px: 0,
    bg: "transparent",
    _focus: {
      boxShadow: "none",
      borderColor: "brand.red",
    },
    _hover: {
      borderColor: "brand.red",
    },
  };

  // Memoize the FloatingShapes component
  const MemoizedFloatingShapes = useMemo(() => <FloatingShapes />, []);

  return (
    <Box
      bg={bgColor}
      bgGradient={bgGradient}
      textColor={textColor}
      py={20}
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      id="contact"
    >
      {MemoizedFloatingShapes}
      <Container maxW="container.md" position="relative" zIndex={1}>
        <VStack spacing={8} align="stretch">
          <MotionBox
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h2" size="xl" textAlign="center">
              Let's Connect!
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text textAlign="center" fontSize="lg">
              I'm always excited to collaborate on new projects or discuss
              opportunities. Feel free to reach out!
            </Text>
          </MotionBox>
          <Flex justifyContent="center" gap={6}>
            {[
              { icon: FaEnvelope, href: "mailto:radaa.sirak@gmail.com" },
              { icon: FaGithub, href: "https://github.com/sirakradaa" },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/sirakradaa/",
              },
            ].map((item, index) => (
              <MotionBox
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <Link href={item.href} isExternal>
                  <Icon
                    as={item.icon}
                    w={8}
                    h={8}
                    color={iconColor}
                    _hover={{ color: "brand.red" }}
                  />
                </Link>
              </MotionBox>
            ))}
          </Flex>
          <MotionBox
            as="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <VStack spacing={6}>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  {...inputStyles}
                />
              </FormControl>
              <FormControl id="lastName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  {...inputStyles}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  {...inputStyles}
                />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  {...inputStyles}
                  resize="none"
                />
              </FormControl>
              <Button
                type="submit"
                bg={buttonBackgroundColor}
                color={buttonText}
                size="lg"
                width="full"
                _hover={{
                  bg: buttonHighlightBackground,
                  color: buttonText,
                  animation: `${pulse} 0.5s ease-in-out infinite`,
                }}
                transition="all 0.2s"
              >
                Send Message
              </Button>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
