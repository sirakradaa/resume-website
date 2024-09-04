import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isScrolled, setIsScrolled] = useState(false);

  const bgColor = useColorModeValue(
    isScrolled ? "rgba(194, 87, 87, 0.8)" : "transparent",
    isScrolled ? "rgba(49, 61, 90, 0.8)" : "transparent"
  );
  const textColor = useColorModeValue("brand.cream", "brand.cream");
  const boxShadow = isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none";
  const backdropFilter = isScrolled ? "blur(5px)" : "none";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      bg={bgColor}
      color={textColor}
      py={4}
      px={6}
      position="fixed"
      top={4}
      left="50%"
      transform="translateX(-50%)"
      zIndex={10}
      width="90%"
      maxWidth="1200px"
      borderRadius="full"
      boxShadow={boxShadow}
      backdropFilter={backdropFilter}
      transition="all 0.3s ease-in-out"
    >
      <Flex justify="center" align="center">
        <Flex justify="space-between" align="center" width="100%" maxW="800px">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              marginRight: "1rem",
            })}
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              marginRight: "1rem",
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              marginRight: "1rem",
            })}
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              marginRight: "1rem",
            })}
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              marginRight: "1rem",
            })}
          >
            Contact
          </NavLink>
          <Button
            color={textColor}
            onClick={toggleColorMode}
            size="sm"
            variant="ghost"
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
