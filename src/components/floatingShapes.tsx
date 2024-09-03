import React from "react";
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const FloatingShapes = () => {
  const { colorMode } = useColorMode();
  const shapes = Array.from({ length: 50 }); // Increase the number of shapes for more stars

  const shapeStyles = {
    position: "absolute",
    opacity: colorMode === "light" ? 0.6 : 0.8, // Increase opacity slightly in dark mode
    animation: "float 10s infinite ease-in-out",
  };

  const starColor = useColorModeValue("black", "white");

  return (
    <>
      {shapes.map((_, index) => (
        <Box
          key={index}
          width={colorMode === "light" ? "40px" : "5px"} // Smaller in dark mode
          height={colorMode === "light" ? "40px" : "5px"} // Smaller in dark mode
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          sx={{
            ...shapeStyles,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 5}s`, // Random duration between 5s and 15s
          }}
        >
          <motion.svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke={starColor}
            strokeWidth={colorMode === "light" ? "2" : "4"} // Thicker stroke in dark mode for more shine
            animate={{
              scale: colorMode === "light" ? [1, 1.1, 1] : [1, 1.3, 1], // More pronounced pulsing in dark mode
              opacity: colorMode === "light" ? [0.6, 0.8, 0.6] : [0.6, 1, 0.6], // More opacity variation in dark mode
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
          </motion.svg>
        </Box>
      ))}
    </>
  );
};

export default FloatingShapes;
