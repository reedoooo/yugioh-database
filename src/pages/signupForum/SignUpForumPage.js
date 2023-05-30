import {Box, Container, Grid, useColorModeValue} from '@chakra-ui/react';
import SignUpForum from '../../components/SignUpForum';
import NavBar from '../../containers/navbar/Navbar';

function SignUpForumPage() {
  return (
    <Grid
      h="100vh"
      templateRows="1fr 9fr"
      templateColumns="1fr 1fr 1fr 1fr"
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <Box gridColumn="1 / -1" bg="gray.500">
        <NavBar />
      </Box>
      <Container maxW="container.xl">
        <SignUpForum />
      </Container>
    </Grid>
  );
}

export default SignUpForumPage;
