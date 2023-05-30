import {useCallback, useContext, useEffect, useState} from 'react';
import {
  Box,
  Collapse,
  Grid,
  GridItem,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import {UserContext} from '../../context/UserContext'; // Assuming UserContext is in the same directory
import config from '../../config';
const apiUrl = config.apiUrl;
function UserGrid() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null); // State for storing the error message
  const {isOpen, onToggle} = useDisclosure();
  const {user, setUser} = useContext(UserContext); // Update the user state using the setUser function

  const getUsers = useCallback(async () => {
    const token = user?.token;

    try {
      const response = await fetch(`${apiUrl}/users`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });

      if (!response.ok) {
        throw new Error('Get users failed');
      }
      const data = await response.json();
      console.log(data.users);
      //   // If 'data' is an array of user objects:
      if (
        Array.isArray(data) &&
        data.length > 0 &&
        typeof data[0] === 'object'
      ) {
        setUsers(data);
      } else if (Array.isArray(data) && typeof data[0] === 'string') {
        const users = data.map((username) => ({username}));
        setUsers(users);
      }
      //   setUsers(users);

      //   setUsers(data);
    } catch (error) {
      // Handle the error
      setError(error.message);
    }
  }, [user?.token]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const UserRow = ({user}) => {
    return (
      <GridItem
        as="button"
        onClick={() => {
          setSelectedUser(user);
          onToggle();
        }}
        _hover={{bg: 'lightblue'}}
        transition="background-color 0.3s"
        p={4}
      >
        <Text fontSize="lg">{user.username}</Text>
      </GridItem>
    );
  };

  useEffect(() => {
    // Load user token from cookie on component mount
    const token = getCookie('token');
    if (token) {
      setUser({token});
    }
  }, [setUser]);

  useEffect(() => {
    // Save user token to cookie whenever it changes
    setCookie('token', user?.token);
  }, [user?.token]);

  const getCookie = (name) => {
    const cookieValue = document.cookie.match(
        '(^|;)\\s*' + name + '\\s*=\\s*([^;]+)',
    );
    return cookieValue ? cookieValue.pop() : '';
  };

  const setCookie = (name, value) => {
    document.cookie = name + '=' + value + '; path=/';
  };

  console.log(users);
  return (
    <Box>
      {error && <Text color="red.500">{error}</Text>}

      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        {/* {users.map((user, index) => {
          if (!user.id) {
            console.warn("Missing user id for user:", user);
            return null;
          }
          return <UserRow key={user.id} user={user} />;
        })} */}
        {users.map((user, index) => {
          console.log(`User at index ${index}:`, user);
          console.log(`ID:`, user?.id);
          return <UserRow key={user.id} user={user} />;
        })}
      </Grid>
      <Collapse in={isOpen}>
        <Box p={4} color="white" mt="4" bg="teal.500">
          <Text fontSize="lg">
            Selected User: {selectedUser && selectedUser.name}
          </Text>
          <Text fontSize="lg">Email: {selectedUser && selectedUser.email}</Text>
          <Text fontSize="lg">
            Username: {selectedUser && selectedUser.username}
          </Text>
        </Box>
      </Collapse>
    </Box>
  );
}

export default UserGrid;
