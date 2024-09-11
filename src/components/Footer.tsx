import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";

export const Footer = () => {
  const textColor = useColorModeValue("brand.cream", "brand.deltaBlue");
  const bgColor = useColorModeValue("brand.richBlack", "brand.cream");

  return (
    <Box as="footer" color={textColor} bg={bgColor} py={4} width="100%">
      <Container maxW="container.xl">
        <Text textAlign="center">
          &copy; 2024 Sirak Radaa. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
