import React from "react";
import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { SkillsImages } from "./assets/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const bgColor = useColorModeValue("brand.cream", "gray.800");
  const cardBgColor = useColorModeValue("brand.red", "gray.700");
  const textColor = useColorModeValue("brand.deltaBlue", "brand.cream");

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box bg={bgColor} py={20} id="skills">
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Heading
            as="h2"
            size="xl"
            textAlign="center"
            color={useColorModeValue("brand.black", "brand.white")}
          >
            MY SKILLS
          </Heading>
          <Box
            p={5}
            borderRadius="md"
            maxW="container.lg"
            mx="auto"
            w={["100%", "90%", "80%", "70%"]}
          >
            <Slider {...settings}>
              {SkillsImages.map((skill, index) => (
                <Box key={index} p={5} textAlign="center">
                  <Box
                    bg="white"
                    borderRadius="full"
                    p={2}
                    width="120px"
                    height="120px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mx="auto"
                  >
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      boxSize="80px"
                      objectFit="contain"
                    />
                  </Box>
                  <Heading as="h3" size="md" mt={4} color={textColor}>
                    {skill.name}
                  </Heading>
                </Box>
              ))}
            </Slider>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Skills;
