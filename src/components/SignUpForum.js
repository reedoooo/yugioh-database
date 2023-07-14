import {useContext, useEffect, useState} from 'react';
import {
  Box,
  Grid,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {UserContext} from '../context/UserContext';


function SignUpForum() {
  const [recentActivity, setRecentActivity] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const {user, userID} = useContext(UserContext);
  // Update the user state using the setUser function

  const {isOpen, onOpen, onClose} = useDisclosure();

  const threads = [
    {id: 1, title: 'Thread 1', replies: 10},
    {id: 2, title: 'Thread 2', replies: 5},
    {id: 3, title: 'Thread 3', replies: 20},
    {id: 4, title: 'Thread 4', replies: 7},
    {id: 5, title: 'Thread 5', replies: 15},
    {id: 6, title: 'Thread 6', replies: 3},
  ];

  const handleThreadClick = (thread) => {
    setSelectedThread(thread);
    onOpen();
  };

  useEffect(() => {
    // Load recent activity from cookie on component mount
    const cookieData = getCookie('recentActivity');
    if (cookieData) {
      setRecentActivity(JSON.parse(cookieData));
    }
  }, []);

  useEffect(() => {
    // Save recent activity to cookie whenever it changes
    setCookie('recentActivity', JSON.stringify(recentActivity));
  }, [recentActivity]);

  const getCookie = (name) => {
    const cookieValue = document.cookie.match(
        '(^|;)\\s*' + name + '\\s*=\\s*([^;]+)',
    );
    return cookieValue ? cookieValue.pop() : '';
  };

  const setCookie = (name, value) => {
    document.cookie = name + '=' + value + '; path=/';
  };

  return (
    <Grid templateColumns="2fr 1fr" gap={6} h="100vh" w="100vw">
      <Box bg="teal.500" color="white" p={5}>
        <Text fontSize="2xl" mb={3}>
          Welcome to the Forum
        </Text>
        <Box bg="gray.200" p={5} rounded="md">
          <Text fontSize="xl">Sign Up Response:</Text>
          {user && (
            <Box>
              <Text fontSize="lg">Username: {user.username}</Text>
              <Text fontSize="lg">Role: {user.role}</Text>
              <Text fontSize="lg">Token: {user.token}</Text>
              <Text fontSize="lg">ID: {userID}</Text>
            </Box>
          )}
          {!user && <Text fontSize="lg">No Response</Text>}
        </Box>
      </Box>

      <Box p={5} bg="gray.200">
        <Text fontWeight="bold" mb={3}>
          Recent Activity
        </Text>
        <Carousel showThumbs={false}>
          {recentActivity.map((activity) => (
            <div key={activity.id}>
              <Text>{activity.activity}</Text>
            </div>
          ))}
        </Carousel>
      </Box>

      <Box p={5}>
        <Text fontWeight="bold" align={'left'}>
          Threads
        </Text>
        <Text fontWeight="bold" align={'right'}>
          Replies
        </Text>
        {threads.map((thread) => (
          <Flex
            justifyContent="space-between"
            bg="gray.100"
            p={3}
            mt={2}
            key={thread.id}
            _hover={{bg: 'lightblue'}}
            transition="background-color 0.3s"
            onClick={() => handleThreadClick(thread)}
            cursor="pointer"
          >
            <Text>{thread.title}</Text>
            <Text>{thread.replies}</Text>
          </Flex>
        ))}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedThread?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>This is where the thread content will go.</ModalBody>
        </ModalContent>
      </Modal>
    </Grid>
  );
}

export default SignUpForum;
