import React, { useState, useEffect, useContext, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import SignUpForumPage from "../pages/signupForum/SignUpForumPage";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import UserGridPage from "../pages/userGrid/UserGridPage";
import { UserContext } from "../context/UserContext";
// import {  } from "framer-motion";

const Main = () => {
  const [users, setUsers] = useState([]);
  // const [error, setError] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const theme = extendTheme({
    colors: {
      gray: {
        500: "#A0AEC0", // Adjust the shade of gray as needed
      },
    },
  });

  const getUsers = useCallback(async () => {
    const token = user?.token;

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        throw new Error("Get users failed");
      }
      const data = await response.json();
      console.log(data.users);

      if (
        Array.isArray(data) &&
        data.length > 0 &&
        typeof data[0] === "object"
      ) {
        setUsers(data);
      } else if (Array.isArray(data) && typeof data[0] === "string") {
        const users = data.map((username) => ({ username }));
        setUsers(users);
      }
    } catch (error) {
      // setError(error.message);
    }
  }, [user?.token]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

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
  console.log(users);

  return (
    <>
      <ChakraProvider theme={theme}>
        <Routes>
          {/* {error && <Text color="red.500">{error}</Text>} */}

          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signupforum" element={<SignUpForumPage />} />
          <Route path="/usergrid" element={<UserGridPage />} />
        </Routes>
      </ChakraProvider>
    </>
  );
};

export default Main;
