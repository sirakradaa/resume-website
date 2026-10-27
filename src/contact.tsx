import React, { useState, useMemo, useRef } from "react";
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

const MIN_FILL_MS = 1000;
const MIN_RESEND_MS = 30000;
const LAST_SENT_KEY = "contact-sent-at";

const SPAM_PATTERNS = [
  /pay\s*per\s*click/i,
  /desired keywords/i,
  /traffic amount/i,
  /guest\s*posts?/i,
  /backlinks?/i,
  /link\s*building/i,
  /rank(?:ing)? (?:your|on) (?:website|google)/i,
  /increase your (?:traffic|sales|ranking)/i,
  /\bseo\b.{0,40}\b(?:services?|packages?|campaigns?|keywords?|rankings?|traffic)\b/i,
  /\b(?:services?|packages?|campaigns?)\b.{0,40}\bseo\b/i,
];

type ContactFields = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const hasRealName = (value: string) => /[a-z]/i.test(value.trim());

const spamReason = (
  fields: ContactFields,
  honeypot: string,
  openedAt: number
): "bot" | string | null => {
  if (honeypot.trim()) return "bot";
  if (Date.now() - openedAt < MIN_FILL_MS) {
    return "Give it a second, then send it again.";
  }

  let lastSent = 0;
  try {
    lastSent = Number(sessionStorage.getItem(LAST_SENT_KEY) || 0);
  } catch {
    lastSent = 0;
  }
  if (lastSent && Date.now() - lastSent < MIN_RESEND_MS) {
    return "Please wait a little before sending another note.";
  }

  if (!hasRealName(fields.firstName) || !hasRealName(fields.lastName)) {
    return "Please use your real name.";
  }

  const message = fields.message.trim();
  const links = message.match(/https?:\/\/|www\./gi);
  if (links && links.length > 5) {
    return "Please remove the extra links and try again.";
  }

  const blob = `${fields.firstName} ${fields.lastName} ${fields.email} ${message}`;
  if (SPAM_PATTERNS.some((pattern) => pattern.test(blob))) {
    return "That looks like advertising, so it was not sent.";
  }

  return null;
};

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFields>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [isSending, setIsSending] = useState(false);
  const openedAt = useRef(Date.now());

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

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setHoneypot("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    const reason = spamReason(formData, honeypot, openedAt.current);
    if (reason === "bot") {
      clearForm();
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (reason) {
      toast({
        title: "Message not sent",
        description: reason,
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsSending(true);
    emailjs
      .send(
        "service_g5ozg4x",
        "template_2ee627a",
        formData,
        "JVMgmJAGiLl3bE6Da"
      )
      .then(
        () => {
          try {
            sessionStorage.setItem(LAST_SENT_KEY, String(Date.now()));
          } catch {
            // Ignore storage failures. The message already went out.
          }
          toast({
            title: "Message sent!",
            description: "Thanks for reaching out. I'll get back to you soon!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          clearForm();
          openedAt.current = Date.now();
        },
        () => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      )
      .finally(() => setIsSending(false));
  };

  const bgColor = useColorModeValue("brand.cream", "brand.richBlack");
  const textColor = useColorModeValue("brand.deltaBlue", "brand.cream");
  const buttonBackgroundColor = useColorModeValue(
    "brand.red",
    "brand.lighterBlue"
  );
  const buttonText = useColorModeValue("brand.cream", "brand.cream");
  const buttonHighlightBackground = useColorModeValue(
    "brand.deltaBlue",
    "brand.red"
  );
  const bgGradient = useColorModeValue(
    "linear(to-b, brand.red, brand.cream 50%)",
    "linear(to-b, #6e2f45 0%, #241433 40%, brand.richBlack 100%)"
  );
  const iconColor = useColorModeValue("brand.deltaBlue", "brand.cream");

  const inputStyles = {
    border: "none",
    borderBottom: "2px solid",
    borderColor: useColorModeValue("brand.deltaBlue", "brand.cream"),
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
              <Box position="absolute" left="-9999px" aria-hidden="true">
                <FormLabel htmlFor="leave_blank">Leave this blank</FormLabel>
                <Input
                  id="leave_blank"
                  type="text"
                  name="leave_blank"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
              </Box>
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
                isLoading={isSending}
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
