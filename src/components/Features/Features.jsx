import { Box, Text } from "@chakra-ui/react";
import Tabs from "./Tabs/Tab";
import Tab from "./Tabs/Tab";

function Features() {
  return (
    <Box w="full" mt={{ xl: "92px" }}>
      <Text
        as="h1"
        w={{ base: "full", xl: "644px" }}
        m="auto"
        color="#22263F"
        style={{ fontFamily: "Figtree" }}
        fontSize={{ base: "5xl", md: "6xl", xl: "50px" }}
        fontWeight="semibold"
        lineHeight="62px"
        letterSpacing="-2%"
        textAlign="center"
      >
        AI Models tailored for your business needs
      </Text>

      <Text
        w={{ base: "full", md: "750px", xl: "860px" }}
        m="auto"
        fontFamily="Plus Jakarta Sans"
        fontSize={{ base: "xl", xl: "22px" }}
        fontWeight="medium"
        lineHeight="38px"
        letterSpacing="-2%"
        textAlign="center"
        color="#828282"
      >
        Leverage the power of AI to automate, analyze, and optimize your
        workflows. Our specialized models are designed to fit different business
        needs
      </Text>

      <Tab />
    </Box>
  );
}

export default Features;
