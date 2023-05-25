import { Box, Flex, Text, Button, useDisclosure } from "@chakra-ui/react";
import LoginModal from "../login/Login";

const NavBar = ({ username }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w="100%"
      p={4}
      color="white"
      position="sticky"
      top="0"
      bg="gray.500"
      zIndex="999"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="lg">Yugioh Deck Builder</Text>
        <Flex>
          <Text mr={4}>Welcome, {username}</Text>
          <Button onClick={onOpen}>Login</Button>
          <LoginModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
          <Button colorScheme="teal" variant="outline">
            Log out
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
