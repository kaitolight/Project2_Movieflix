import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";
import ModalInspiration from "./ModalInspiration";

export default function Navbar() {
  return (
    <HStack wrap="nowrap" color="white" marginRight="2rem">
      <nav>
        <Button
          variant="ghost"
          _hover={{ bgColor: "#2B3543" }}
          fontSize={{ base: "10px", sm: "15px", md: "20px", lg: "30px" }}
        >
          <Link to="/movies">All Movies</Link>
        </Button>
        <Button
          variant="ghost"
          _hover={{ bgColor: "#2B3543" }}
          fontSize={{ base: "10px", sm: "15px", md: "20px", lg: "30px" }}
        >
          <Link to="/popular">Popular</Link>
        </Button>
        <ModalInspiration />
      </nav>
    </HStack>
  );
}
