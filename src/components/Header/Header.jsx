import { Box } from "@chakra-ui/react";
import Nav from "./Nav";

function Header() {
  return (
    <Box w="full" as="header">
      <Nav />
    </Box>
  );
}

export default Header;
