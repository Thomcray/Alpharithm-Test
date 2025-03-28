import { Box, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import { Link as ReactRouter } from "react-router";

function Nav({ flexDirection, hideBelow, alignItems }) {
  const route = [
    {
      name: "Models",
      path: "/models",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
    {
      name: "Custom Models",
      path: "/custom-models",
    },
  ];
  return (
    <Box
      as="nav"
      flexDirection={flexDirection}
      hideBelow={hideBelow}
      w={{ base: "full", xl: "fit-content" }}
      ml={{ md: "40px", xl: "120px" }}
      display="flex"
      justifyContent="space-between"
    >
      <Stack
        direction={flexDirection}
        display="flex"
        alignItems={alignItems}
        justifyContent="center"
        gap="24px"
      >
        {route.map((item, index) => (
          <ChakraLink
            // w={{ base: "120px", md: "fit-content", xl: "fit-content" }}
            as={ReactRouter}
            key={index}
            to={item.path}
            style={{ fontFamily: "Figtree" }}
            fontWeight="medium"
            fontSize="16px"
            lineHeight="100%"
            color="white"
            textDecoration="none"
            _focus={{ outline: "none", boxShadow: "none" }}
            _focusVisible={{ outline: "none", boxShadow: "none" }}
          >
            {item.name}
          </ChakraLink>
        ))}
      </Stack>
    </Box>
  );
}

export default Nav;
