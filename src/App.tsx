import {
  ChakraProvider,
  extendTheme,
  Box,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import AboutMe from "./aboutMe";
import Skills from "./skills";
import Contact from "./contact";
import { Projects } from "./projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./hero";
import Header from "./components/header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

// Extend the theme to include custom colors
const theme = extendTheme({
  fonts: {
    heading: "'Kalam', cursive",
    body: "system-ui, sans-serif", // Keep the body font as is, or change if desired
  },
  colors: {
    brand: {
      beaver: "#B49082",
      cream: "#F3F3BA",
      deltaBlue: "#313D5A",
      red: "#C25757",
      white: "#FFFFFF",
      yinMnBlue: "#485696",
      richBlack: "#0D1321",
    },
  },
});

const PageWrapper = ({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) => (
  <VStack bg={bg} minHeight="100vh" width="100%" spacing={0}>
    <Header />
    <Box flexGrow={1} width="100%" overflowY="auto">
      {children}
    </Box>
  </VStack>
);

export const App = () => {
  const bgColor = useColorModeValue("brand.red", "brand.richBlack");

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <PageWrapper bg={bgColor}>
          <Routes>
            <Route path="/hero" element={<Hero />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/" element={<AboutMe />} />
          </Routes>
          <Footer />
        </PageWrapper>
      </Router>
    </ChakraProvider>
  );
};

export default App;
