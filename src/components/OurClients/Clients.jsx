import { Box, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { client } from "./client";

function Clients() {
  return (
    <Box w="full" py="24px" spaceY="32px">
      <Text
        fontFamily="Plus Jakarta Sans"
        fontWeight="medium"
        fontSize="16px"
        lineHeight="24px"
        textAlign="center"
        color="#667085"
      >
        Join 4,000+ companies already growing
      </Text>

      <Stack
        gap={{ base: "50px" }}
        direction="row"
        justifyContent="space-between"
        overflowX="auto"
      >
        {client.map((c, index) => (
          <Box
            key={index}
            gap="2px"
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Image src={c.icon} alt="client-icon" boxSize={8} />
            <Text color="#101828">{c.name}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default Clients;
