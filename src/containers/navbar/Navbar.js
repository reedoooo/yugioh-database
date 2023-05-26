import { Box, Flex, Text, Button, useDisclosure } from "@chakra-ui/react";
import LoginModal from "../../components/modals/LoginModal";

const NavBar = ({ username }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [username, setUsername] = useState("");

  const handleOpen = (event) => {
    event.preventDefault();
    console.log('click')
    onOpen()
  };

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

          <Button onClick={handleOpen}>Login</Button>
          <LoginModal isOpen={isOpen} onClose={onClose} />
          {/* <LoginModal isOpen={isOpen} onClose={onClose} /> */}

          <Button colorScheme="teal" variant="outline">
            Log out
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
