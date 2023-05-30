import {Box, Spinner} from '@chakra-ui/react';
import cardPlaceholder from './placeholder.png';

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        width="100px"
        height="100px"
        borderRadius="50%"
        position="relative"
        overflow="hidden"
        animation="spin 1s infinite linear"
      >
        <img src={cardPlaceholder} alt="Card Placeholder" width="100%" height="100%" />
        <Spinner
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
        />
      </Box>
    </Box>
  );
};

export default Loader;
