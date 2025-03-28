import { Box, Icon, Stack } from "@chakra-ui/react";
import alphaIcon from "@/assets/alpharithm-icon.svg?react";
import Nav from "./Nav";
import CustomButton from "../CustomButton";
import MobileDrawer from "../MobileDrawer";

function Header({ isVisible }) {
  return (
    <Box
      w="full"
      top="0"
      left="0"
      right="0"
      px={{ base: "5px", xl: "70px" }}
      py={{ base: 5, md: 5, xl: 10 }}
      bg="transparent"
      position="fixed"
      justifyContent="space-between"
      as="header"
      display="flex"
      flexDirection="row"
      zIndex="1000"
      fontFamily="Figtree"
      transform={isVisible ? "translateY(0)" : "translateY(-100%)"}
      transition="transform 0.3s ease-in-out"
    >
      <Icon as={alphaIcon} w="48px" />
      <Nav flexDirection="row" hideBelow="md" alignItems="center" />

      <Stack direction="row" hideBelow="md">
        <CustomButton border="1px solid #fff" color="white" bg="#04142B">
          Login
        </CustomButton>
        <CustomButton>Get Started Now</CustomButton>
      </Stack>

      <MobileDrawer />
    </Box>
  );
}

export default Header;
