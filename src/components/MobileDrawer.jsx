"use client";

import { useState } from "react";
import { Button, CloseButton, Drawer, Icon, Portal } from "@chakra-ui/react";
import { IoMenuSharp } from "react-icons/io5";
import alphaIcon from "@/assets/alpharithm-icon.svg?react";
import Nav from "./Header/Nav";
import CustomButton from "./CustomButton";

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      placement="top"
    >
      <Drawer.Trigger asChild>
        <Icon
          display="flex"
          alignSelf="self-end"
          boxSize={10}
          color="white"
          hideFrom="md"
        >
          <IoMenuSharp />
        </Icon>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content borderBottomRadius="25px">
            <Drawer.Header>
              <Drawer.Title>
                <Icon as={alphaIcon} w="48px" />
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Nav flexDirection="column" alignItems="center" />
            </Drawer.Body>
            <Drawer.Footer
              w="fit-content"
              display="flex"
              flexDirection="column"
              alignSelf="center"
            >
              <CustomButton
                w="full"
                border="1px solid #fff"
                color="white"
                bg="#04142B"
              >
                Login
              </CustomButton>
              <CustomButton w="full">Get Started Now</CustomButton>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MobileDrawer;
