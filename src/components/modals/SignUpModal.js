import React, { useState } from "react";
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
} from "@chakra-ui/react";
// import SignUpForum from "../SignUpForum";

function SignUpModal({ isOpen, onClose, onSignUp, signUpResponse, setSignUpResponse }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const [signUpResponse, setSignUpResponse] = useState(null);

  const signUp = async () => {
    try {
      const userData = {
        username,
        password,
      };

      const response = await fetch("http://localhost:3001/signup", {
        // using full URL to bypass proxy
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      const data = await response.json();
      setSignUpResponse(data);
      console.log(data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
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
            <Button colorScheme="blue" mr={3} onClick={signUp}>
              Sign Up
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
      {/* <SignUpForum signUpResponse={signUpResponse} /> */}
    </div>
  );
}

export default SignUpModal;
