import React, { useMemo } from "react";
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const FloatingShapes = () => {
  const { colorMode } = useColorMode();
  const starColor = useColorModeValue("#313D5A", "#F3F3BA");
  const isNight = colorMode === "dark";

  const stars = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        top: `${(index * 41) % 92}%`,
        left: `${(index * 57 + 8) % 94}%`,
        size: 7 + (index % 4) * 5,
        delay: (index % 6) * 0.35,
        duration: 7 + (index % 5) * 1.4,
      })),
    []
  );

  return (
    <Box position="absolute" inset={0} pointerEvents="none" zIndex={0} aria-hidden>
      {isNight && (
        <Box
          position="absolute"
          top="-90px"
          right="-50px"
          w="320px"
          h="320px"
          borderRadius="full"
          bg="rgba(243, 243, 186, 0.09)"
          boxShadow="0 0 80px 20px rgba(194, 87, 87, 0.18)"
        />
      )}
      {stars.map((star, index) => (
        <Box
          key={index}
          position="absolute"
          top={star.top}
          left={star.left}
          width={`${star.size}px`}
          height={`${star.size}px`}
          sx={{ animation: `float ${star.duration}s ${star.delay}s infinite ease-in-out` }}
        >
          <motion.svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            fill={index % 3 === 0 ? starColor : "none"}
            stroke={starColor}
            strokeWidth="3"
            animate={{ opacity: [0.35, 0.9, 0.35], rotate: [0, 12, 0] }}
            transition={{ duration: star.duration, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M50 4 L61 38 L96 50 L61 62 L50 96 L39 62 L4 50 L39 38 Z" />
          </motion.svg>
        </Box>
      ))}
    </Box>
  );
};

export default FloatingShapes;
