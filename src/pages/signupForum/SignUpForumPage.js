import React, { useState } from "react";
import { Box, Container, Grid, useColorModeValue } from "@chakra-ui/react";
import SignUpForum from "../../components/SignUpForum";
import NavBar from "../../containers/navbar/Navbar";

function SignUpForumPage() {
//   const signUpResponse = JSON.parse(localStorage.getItem("signUpResponse"));
  const [signUpResponse, setSignUpResponse] = useState(null);

  return (
    // <Box
    //   bg={useColorModeValue("gray.100", "gray.900")}
    //   minH="100vh"
    //   py="12"
    //   px={{ base: "4", lg: "8" }}
    // >
    <Grid
      h="100vh"
      templateRows="1fr 9fr"
      templateColumns="1fr 1fr 1fr 1fr"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Box gridColumn="1 / -1" bg="gray.500">
        <NavBar signUpResponse={signUpResponse} setSignUpResponse={setSignUpResponse} />
      </Box>
      <Container maxW="container.xl">
        <SignUpForum signUpResponse={signUpResponse} />
      </Container>
    </Grid>
  );
}

export default SignUpForumPage;
