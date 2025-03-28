import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import { useCallback, useState } from "react";

function Layout() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(
    (e) => {
      const currentScrollY = e.target.scrollTop;

      // If scrolling down > 50px, hide header
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false);
      }
      // If scrolling up, show the header if currScroll is < 50px
      else if (currentScrollY < lastScrollY && currentScrollY < 50) {
        setIsHeaderVisible(true);
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    },
    [lastScrollY]
  );
  return (
    <Box h="dvh" onScroll={handleScroll} overflowY="auto">
      <Header isVisible={isHeaderVisible} />
      <Outlet />
    </Box>
  );
}

export default Layout;
