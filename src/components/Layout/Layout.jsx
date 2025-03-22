import { Box } from "@chakra-ui/react";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
}

export default Layout;
