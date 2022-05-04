import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Logo from "./Logo";

const CTA = "Sign in";
const CTA2 = "Sign up";

export default function Header({ isOnHome }) {
  return (
    <Flex
      w="100vw"
      px="6"
      py="5"
      align="center"
      justify="space-between"
      h="100px"
      zIndex="9999"
      bgGradient={
        isOnHome
          ? "linear-gradient(to bottom, rgba(0,2,10,0.8),transparent)"
          : null
      }
      position={isOnHome ? "fixed" : "relative"}
    >
      <Flex gap={10} w="100%" align="center" justify="space-around">
        <a href="/">
          <Logo />
        </a>
        <Navbar />
        {!isOnHome && <Searchbar />}
        <Flex direction="column">
          <Button
            colorScheme="teal"
            size={{ sm: "24px", md: "40px", lg: "120px" }}
          >
            {CTA}
          </Button>
          <Button
            variant="ghost"
            _hover={{ bgColor: "#2B3543" }}
            size={{ sm: "24px", md: "40px", lg: "120px" }}
          >
            {CTA2}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
