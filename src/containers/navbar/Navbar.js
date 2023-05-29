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
    onLoginOpen();
  };
  const handleOpenSignUp = (event) => {
    event.preventDefault();
    onSignUpOpen();
  };
  useEffect(() => {
    const token = getCookie("token");
    const username = getCookie("username");
    const id = getCookie("id");
    const role = getCookie("role");
    if (token && username && id && role) {
      setUser({ token, username, id, role });
    }
  }, [setUser]);
  useEffect(() => {
    setCookie("token", user?.token);
    setCookie("username", user?.username);
    setCookie("id", user?.id);
    setCookie("role", user?.role);
  }, [user?.token, user?.username, user?.id, user?.role]);
  const getCookie = (name) => {
    const cookieValue = document.cookie.match(
      "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
    );
    return cookieValue ? cookieValue.pop() : "";
  };
  const setCookie = (name, value) => {
    document.cookie = name + "=" + value + "; path=/";
  };
  const handleLogout = () => {
    setUser(null);
    onClose();
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
        </Button>
        <Button onClick={handleOpenLogin} variant="outline">
          Login
        </Button>
        {user && user.username ? (
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        ) : null}
        <Box>
          <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
          <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
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
      </Flex>
    </Box>
  );
};
export default NavBar;