import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";

export const Footer = () => {
  const bgColor = useColorModeValue("brand.cream", "brand.richBlack");
  const textColor = useColorModeValue("brand.deltaBlue", "brand.cream");

  return (
    <Box bg={bgColor} textColor={textColor} py={4}>
      <Container maxW="container.xl">
        <Text textAlign="center">
          &copy; 2024 Sirak Radaa. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
