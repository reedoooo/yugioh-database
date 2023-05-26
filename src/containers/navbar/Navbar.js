import { Box, Flex, Text, Button, useDisclosure } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import LoginModal from "../../components/modals/LoginModal";
import SignUpModal from "../../components/modals/SignUpModal";
import { UserContext } from "../../context/UserContext"; // Assuming UserContext is in the same directory
import { useContext, useEffect } from "react";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext); // Update the user state using the setUser function

  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();

  const {
    isOpen: isSignUpOpen,
    onOpen: onSignUpOpen,
    onClose: onSignUpClose,
  } = useDisclosure();

  const handleOpenLogin = (event) => {
    event.preventDefault();
    console.log("click");
    onLoginOpen();
  };

  const handleOpenSignUp = (event) => {
    event.preventDefault();
    console.log("click");
    onSignUpOpen();
  };
  useEffect(() => {
    // Load user token from cookie on component mount
    const token = getCookie("token");
    if (token) {
      setUser({ token });
    }
  }, [setUser]);

  useEffect(() => {
    // Save user token to cookie whenever it changes
    setCookie("token", user?.token);
  }, [user?.token]);

  const getCookie = (name) => {
    const cookieValue = document.cookie.match(
      "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
    );
    return cookieValue ? cookieValue.pop() : "";
  };

  const setCookie = (name, value) => {
    document.cookie = name + "=" + value + "; path=/";
  };

  console.log(user);
  //   const withSignUpResponse = (Component) => (props) =>
  //   <Component {...props} signUpResponse={signUpResponse} />;

  // const SignUpForumWithResponse = withSignUpResponse(SignUpForum);

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
        {/* <Image /> */}
        <Text mr={4} align={"left"}>
          {user?.username}
        </Text>

        <Flex>
          <Button onClick={handleOpenLogin}>Login</Button>
          <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />

          <Button onClick={handleOpenSignUp}>SignUp</Button>
          <SignUpModal
            isOpen={isSignUpOpen}
            // signUpResponse={signUpResponse}
            // setSignUpResponse={setSignUpResponse}
            onClose={onSignUpClose}
            // onSignUp={setSignUpResponse}
          />

          {/* {signUpResponse && <SignUpForum signUpResponse={signUpResponse} />} */}
          {/* {signUpResponse && <SignUpForum signUpResponse={signUpResponse} />}  */}

          <Button
            as={NavLink}
            to="/signupforum"
            colorScheme="teal"
            variant="outline"
          >
            Signup Forum
          </Button>
          <Button as={NavLink} to="/home" colorScheme="teal" variant="outline">
            Home
          </Button>
          <Button
            as={NavLink}
            to="/usergrid"
            colorScheme="teal"
            variant="outline"
          >
            User Grid
          </Button>
          <Button colorScheme="teal" variant="outline">
            Log out
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
