import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import {
  MoonIcon,
  SunIcon,
  DownloadIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const bgColor = useColorModeValue(
    isScrolled ? "rgba(194, 87, 87, 0.8)" : "transparent",
    isScrolled ? "rgba(49, 61, 90, 0.8)" : "transparent"
  );
  const textColor = useColorModeValue("brand.cream", "brand.cream");
  const boxShadow = isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none";
  const backdropFilter = isScrolled ? "blur(5px)" : "none";

  const isMobile = useBreakpointValue({ base: true, md: false });

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

  const handleResumeDownload = () => {
    // Replace 'path_to_your_resume.pdf' with the actual path to your resume file
    const resumeUrl =
      "https://docs.google.com/document/d/1pOMsrRROz-R5PxtvJ_3UZOGst2ImUohX/export?format=pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Your_Name_Resume.pdf"; // Replace with your name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const hoverStyle = {
    bg: colorMode === "light" ? "brand.beaver" : "brand.yinMnBlue",
    color: "brand.cream",
  };

  const menuItems = ["Work", "About", "Projects", "Skills", "Contact"];

  const MenuItemLink = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => {
    const isActive =
      location.pathname === to || (to === "/" && location.pathname === "/work");
    const activeStyle = {
      fontWeight: "bold",
      backgroundColor:
        colorMode === "light" ? "brand.beaver" : "brand.yinMnBlue",
      color: "brand.cream",
    };
    const inactiveStyle = {
      fontWeight: "normal",
      backgroundColor: "transparent",
      color: textColor,
    };

    return (
      <NavLink to={to} style={isActive ? activeStyle : inactiveStyle}>
        <Box width="100%" display="block" padding="0.5rem 1rem">
          {children}
        </Box>
      </NavLink>
    );
  };

  const NavItems = () => (
    <>
      {menuItems.map((item) => (
        <NavLink
          key={item}
          to={item === "Work" ? "/" : `/${item.toLowerCase()}`}
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            marginRight: "1rem",
          })}
        >
          <Box
            as="span"
            px={2}
            py={1}
            borderRadius="md"
            _hover={hoverStyle}
            transition="all 0.3s"
          >
            {item}
          </Box>
        </NavLink>
      ))}
    </>
  );

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
      <Flex justify="space-between" align="center">
        {isMobile ? (
          <>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                size="lg"
              />
              <MenuList>
                {menuItems.map((item) => (
                  <MenuItem key={item} as="div" p={0}>
                    <MenuItemLink
                      to={item === "Work" ? "/" : `/${item.toLowerCase()}`}
                    >
                      {item}
                    </MenuItemLink>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Flex>
              <Button
                leftIcon={<DownloadIcon />}
                onClick={handleResumeDownload}
                size="sm"
                variant="ghost"
                color={textColor}
                mr={2}
                _hover={hoverStyle}
              >
                Resume
              </Button>
              <Button
                color={textColor}
                onClick={toggleColorMode}
                size="sm"
                variant="ghost"
                _hover={hoverStyle}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </>
        ) : (
          <Flex width="100%" justify="space-between" align="center">
            <Box flex="1" /> {/* This creates space on the left */}
            <Flex align="center" justify="center" flex="2">
              <NavItems />
            </Flex>
            <Flex align="center" justify="flex-end" flex="1">
              <Button
                leftIcon={<DownloadIcon />}
                onClick={handleResumeDownload}
                size="sm"
                variant="ghost"
                color={textColor}
                mr={2}
                _hover={hoverStyle}
              >
                My Resume
              </Button>
              <Button
                color={textColor}
                onClick={toggleColorMode}
                size="sm"
                variant="ghost"
                _hover={hoverStyle}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
