import { Grid, Image, Tabs, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { content } from "./content";
import { useEffect, useRef, useState } from "react";

function Tab() {
  const [value, setValue] = useState("");

  // store refs for each box
  const boxRefs = useRef([]);

  useEffect(() => {
    const selectedIndex = content.findIndex((item) => item.value === value);
    if (selectedIndex !== -1 && boxRefs.current[selectedIndex]) {
      boxRefs.current[selectedIndex].scrollIntoView({
        behavior: "smooth",
        // aligns the box within view
        block: "nearest",
        // scrolls horizontally - for grid layouts
        inline: "center",
      });
    }
  }, [value]);

  return (
    <Box w="full" mt="30px">
      <Tabs.Root
        variant="enclosed"
        value={value}
        justifySelf={{ base: "auto", md: "center", xl: "center" }}
        onValueChange={(e) => setValue(e.value)}
        overflow="auto"
      >
        <Tabs.List bg="white" gap="5px" border="1px solid #E4E4E7">
          {content.map((content, index) => (
            <Tabs.Trigger
              key={index}
              value={content.value}
              _selected={{ bg: "#03217F", color: "white" }}
              textWrap={{ base: "nowrap" }}
              fontFamily="Figtree"
              fontWeight="semibold"
              fontSize="16px"
            >
              {content.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>

      <Grid
        w="full"
        gridTemplateColumns="repeat(5, 1fr)"
        gap="30px"
        overflow="auto"
        scrollBehavior="smooth"
        css={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        {content.map((content, index) => (
          <Box
            w={{ base: "full", xl: "800px" }}
            mt="50px"
            bg="#F6FAF3"
            key={index}
            ref={(el) => (boxRefs.current[index] = el)}
            pl={{ base: 2, xl: 4 }}
            gap={{ base: 12 }}
            display="flex"
            flexDirection="row"
            borderRadius="12px"
            transition="all 0.3s ease-in-out"
            transform={
              content.value === value ? "translateY(-30px)" : "translateY(0)"
            }
            boxShadow={
              content.value === value
                ? "0px 10px 20px rgba(0, 0, 0, 0.2)"
                : "none"
            }
            zIndex={content.value === value ? "1300" : "-1"}
          >
            <Box w={{ base: "xs", xl: "1000px" }} m="auto" spaceY="16px">
              <Text
                fontWeight="semibold"
                fontSize={{ base: "12px", xl: "19.5px" }}
                lineHeight="100%"
                letterSpacing="-2%"
                color="#828282"
              >
                {content.title}
              </Text>
              <Text
                fontFamily="Figtree"
                fontWeight="semibold"
                fontSize={{ base: "18px", xl: "43px" }}
                lineHeight="100%"
                letterSpacing="-2%"
                color="#22263F"
              >
                {content.description}
              </Text>
            </Box>
            <Box w="full" pt={4}>
              <Image
                src={content.image}
                alt={content.value}
                w={{ xl: "520px" }}
              />
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Tab;
