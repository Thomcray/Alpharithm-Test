import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import Clients from "@/components/OurClients/Clients";
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <Box as="section">
      <Hero />
      <Clients />
      <Features />
    </Box>
  );
}

export default Home;
