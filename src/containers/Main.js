import {useState, useEffect, useContext, useCallback} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/home/Home';
import SignUpForumPage from '../pages/signupForum/SignUpForumPage';
import {ChakraProvider} from '@chakra-ui/react';
import UserGridPage from '../pages/userGrid/UserGridPage';
import {UserContext} from '../context/UserContext';
import theme from '../assets/chakrathemes';
import config from '../config';

const apiUrl = config.apiUrl;


const Main = () => {
  const [users, setUsers] = useState([]);
  const {user, setUser} = useContext(UserContext);

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

      if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'object') {
        setUsers(data);
      } else if (Array.isArray(data) && typeof data[0] === 'string') {
        const users = data.map((username) => ({username}));
        setUsers(users);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [user?.token]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    // Load user token from cookie on component mount
    const token = getCookie('token');
    const username = getCookie('username');
    console.log(username);
    const id = getCookie('id');
    const role = getCookie('role');

    if (token && username && id && role) {
      setUser({token, username, id, role});
    }
  }, [setUser]);

  useEffect(() => {
    // Save user token to cookie whenever it changes
    console.log('token', user?.token);
    setCookie('token', user?.token);
    console.log('username', user?.username);
    setCookie('username', user?.username);
    setCookie('id', user?.id);
    setCookie('role', user?.role);
  }, [user?.token, user?.username, user?.id, user?.role]);

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
    <>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signupforum" element={<SignUpForumPage />} />
          <Route path="/usergrid" element={<UserGridPage />} />
          {/* <Route path="/maintenance" element={<NavBar username={user?.username} />} /> */}
        </Routes>
      </ChakraProvider>
    </>
  );
};

export default Main;
