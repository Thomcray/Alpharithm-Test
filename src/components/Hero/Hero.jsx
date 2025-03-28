import { Box, Text } from "@chakra-ui/react";
import CustomButton from "../CustomButton";

function Hero() {
  return (
    <Box
      as="section"
      pt={{ base: 20, xl: 32 }}
      background="radial-gradient(circle at bottom center, rgba(255, 255, 255, 0.4) 5%, rgba(255, 255, 255, 0) 50%), 
            linear-gradient(to bottom, #04142B, #0037FF);"
    >
      <Box
        w={{ base: "full", xl: "860px" }}
        m="auto"
        gapY="24px"
        display="flex"
        flexDirection="column"
      >
        <Box w={{ base: "full", xl: "700px" }} m="auto">
          <Text
            fontFamily="Plus Jakarta Sans"
            fontWeight="bold"
            fontSize="16px"
            lineHeight="38px"
            color="#7191FF"
            textAlign="center"
          >
            Leverage on Automation
          </Text>
          <Text
            as="h1"
            textAlign="center"
            style={{ fontFamily: "Figtree" }}
            fontWeight="semibold"
            fontSize={{ base: "5xl", md: "8xl", xl: "76px" }}
            lineHeight={{ xl: "82px" }}
          >
            AI Models for Business Solutions
          </Text>
        </Box>
        <Text
          fontSize={{ base: "xl", xl: "22px" }}
          fontFamily="Plus Jakarta Sans"
          fontWeight="medium"
          lineHeight="38px"
          letterSpacing="-2%"
          textAlign="center"
        >
          Leverage the power of AI to automate, analyze, and optimize your
          workflows. Our specialized models are designed to fit different
          business needs
        </Text>

        <CustomButton
          w="fit-content"
          m="auto"
          px="26px"
          py="12px"
          mb="80px"
          fontFamily="Figtree"
          fontWeight="semibold"
          borderRadius="12px"
          bg="white"
          color="#03061D"
        >
          Get Started Now
        </CustomButton>
      </Box>
    </Box>
  );
}

export default Hero;
