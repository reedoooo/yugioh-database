<<<<<<< HEAD
import {
  Box,
  Flex,
  Text,
  Button,
  useDisclosure,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import LoginModal from "../../components/modals/LoginModal";
import SignUpModal from "../../components/modals/SignUpModal";
import { UserContext } from "../../context/UserContext"; // Assuming UserContext is in the same directory
import { useContext, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
// import { extendTheme } from "@chakra-ui/react";
import NavLinkItem from "./NavLinkItem"; // Assuming NavLinkItem is in the same directory

const NavBar = () => {
  const { user, setUser } = useContext(UserContext); // Update the user state using the setUser function
  const { onClose } = useDisclosure();
  // const { isOpen, onToggle } = useDisclosure();

=======
import { Box, Flex, Text, Button, useDisclosure, Avatar, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import LoginModal from "../../components/modals/LoginModal";
import SignUpModal from "../../components/modals/SignUpModal";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import NavLinkItem from "./NavLinkItem";
const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const { onClose } = useDisclosure();
>>>>>>> work
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
<<<<<<< HEAD

=======
>>>>>>> work
  const {
    isOpen: isSignUpOpen,
    onOpen: onSignUpOpen,
    onClose: onSignUpClose,
  } = useDisclosure();
<<<<<<< HEAD

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
=======
  const handleOpenLogin = (event) => {
    event.preventDefault();
    onLoginOpen();
  };
  const handleOpenSignUp = (event) => {
    event.preventDefault();
    onSignUpOpen();
  };
  useEffect(() => {
>>>>>>> work
    const token = getCookie("token");
    const username = getCookie("username");
    const id = getCookie("id");
    const role = getCookie("role");
<<<<<<< HEAD

=======
>>>>>>> work
    if (token && username && id && role) {
      setUser({ token, username, id, role });
    }
  }, [setUser]);
<<<<<<< HEAD

  useEffect(() => {
    // Save user token to cookie whenever it changes
=======
  useEffect(() => {
>>>>>>> work
    setCookie("token", user?.token);
    setCookie("username", user?.username);
    setCookie("id", user?.id);
    setCookie("role", user?.role);
  }, [user?.token, user?.username, user?.id, user?.role]);
<<<<<<< HEAD

=======
>>>>>>> work
  const getCookie = (name) => {
    const cookieValue = document.cookie.match(
      "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
    );
    return cookieValue ? cookieValue.pop() : "";
  };
<<<<<<< HEAD

  const setCookie = (name, value) => {
    document.cookie = name + "=" + value + "; path=/";
  };

=======
  const setCookie = (name, value) => {
    document.cookie = name + "=" + value + "; path=/";
  };
>>>>>>> work
  const handleLogout = () => {
    setUser(null);
    onClose();
  };
<<<<<<< HEAD

  console.log(user);

  // console.log('username', user?.username);

  //   const withSignUpResponse = (Component) => (props) =>
  //   <Component {...props} signUpResponse={signUpResponse} />;

  // const SignUpForumWithResponse = withSignUpResponse(SignUpForum);

=======
>>>>>>> work
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
<<<<<<< HEAD
        <Text fontSize="lg" fontWeight="bold">
          Yugioh Deck Builder
        </Text>
        <Button onClick={handleOpenSignUp} variant="outline">
          SignUp
=======
        {user && user.username ? (
          <Flex alignItems="center">
            <Avatar name={user.username} size="sm" />
            <Text ml={2} fontSize="sm">
              {user.username}
            </Text>
          </Flex>
        ) : (
          <Text fontSize="lg" fontWeight="bold">
            Yugioh Deck Builder
          </Text>
        )}
        <Button onClick={handleOpenSignUp} variant="outline">
          Sign Up
>>>>>>> work
        </Button>
        <Button onClick={handleOpenLogin} variant="outline">
          Login
        </Button>
<<<<<<< HEAD
        <Button onClick={handleLogout} variant="outline">
          Log out
        </Button>
        <Box>
          <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />

          <SignUpModal
            isOpen={isSignUpOpen}
            onClose={onSignUpClose}
          />
=======
        {user && user.username ? (
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        ) : null}
        <Box>
          <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
          <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
>>>>>>> work
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FaBars />}
              variant="outline"
              colorScheme="white"
              size="sm"
            >
              Menu
            </MenuButton>
            <MenuList bg={"secondary.200"}>
              <NavLinkItem to="/signupforum">Signup Forum</NavLinkItem>
              <NavLinkItem to="/home">Home</NavLinkItem>
              <NavLinkItem to="/usergrid">User Grid</NavLinkItem>
<<<<<<< HEAD

=======
>>>>>>> work
              {user ? (
                <NavLinkItem onClick={handleLogout}>
                  <Flex alignItems="center">
                    <AiOutlineLogout style={{ marginRight: "0.5rem" }} />
                    Logout
                  </Flex>
                </NavLinkItem>
              ) : (
                <>
                  <NavLinkItem as={NavLink} to="/signup">
                    Sign Up
                  </NavLinkItem>
                  <NavLinkItem as={NavLink} to="/login">
                    Login
                  </NavLinkItem>
                </>
              )}
            </MenuList>
          </Menu>
        </Box>
<<<<<<< HEAD
        <Box>
        {user && user.username ? ( // Add a conditional check for user.username
            <Flex alignItems="center">
              <Avatar name={user.username} size="sm" />
              <Text ml={2} fontSize="sm">
                {user.username}
              </Text>
            </Flex>
          ) : (
            <Flex>
              <Button as={NavLink} to="/signup" variant="outline" size="sm">
                Sign Up
              </Button>
              <Button as={NavLink} to="/login" variant="outline" size="sm">
                Login
              </Button>
            </Flex>
          )}
        </Box>
=======
>>>>>>> work
      </Flex>
    </Box>
  );
};
<<<<<<< HEAD

export default NavBar;
=======
export default NavBar;
>>>>>>> work
