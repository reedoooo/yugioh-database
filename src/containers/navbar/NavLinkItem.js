import { MenuItem as ChakraMenuItem, useTheme } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavLinkItem = ({ children, to, ...props }) => {
  const theme = useTheme();

  const navItemStyle = {
    bg: theme.colors.secondary[200],
    _active: {
      bg: theme.colors.tertiary[200],
      color: "white",
    },
    _focus: {
      bg: theme.colors.tertiary[100],
      color: "white",
    },
    _hover: {
      bg: theme.colors.secondary[100],
      color: "darkgrey",
    },
    as: NavLink,
    to,
    ...props,
  };

  return <ChakraMenuItem {...navItemStyle}>{children}</ChakraMenuItem>;
};

export default NavLinkItem;
