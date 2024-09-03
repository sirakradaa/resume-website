import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";

export const Footer = () => {
  const textColor = useColorModeValue("brand.deltaBlue", "brand.cream");
  const bgColor = useColorModeValue("brand.cream", "brand.richBlack");

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
