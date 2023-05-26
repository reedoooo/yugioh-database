import React, { useContext, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { UserContext } from "../../context/UserContext";

function LoginModal({ onClose, isOpen }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [error, setError] = useState(null); // State for storing the error message
//   const { isOpen, onToggle } = useDisclosure();
//   const { user, setUser } = useContext(UserContext); // Update the user state using the setUser function

  const signIn = async () => {
    try {
      const data = await fetch('http://localhost:3001/signin', { // updated here
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa(username + ":" + password),
        },
      });

      if (!data.ok) {
        throw new Error('Sign in failed');
      }

      const userData = await data.json();
      console.log(userData);
      setUser(userData); // Set the user in context

      onClose();

    } catch (error) {
      console.error(error);
    }
  };



  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={signIn}>
            Login
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;
