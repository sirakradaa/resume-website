import { ChakraProvider, Box, useColorModeValue } from "@chakra-ui/react";
import theme from "./theme";
import AboutMe from "./aboutMe";
import Skills from "./skills";
import Contact from "./contact";
import { Projects } from "./projects";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./hero";
import Header from "./components/header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const PageWrapper = ({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) => (
  <Box bg={bg} minHeight="100vh" display="flex" flexDirection="column">
    <Header />
    <Box flexGrow={1} width="100%" overflowY="auto">
      {children}
    </Box>
    <Footer />
  </Box>
);

export const App = () => {
  const bgColor = useColorModeValue("brand.cream", "brand.richBlack");

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <PageWrapper bg={bgColor}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </PageWrapper>
      </Router>
    </ChakraProvider>
  );
};

export default App;
