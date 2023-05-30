import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#F8F8F8',
      100: '#ECECEC',
      200: '#D0D0D0',
      300: '#B4B4B4',
      400: '#7C7C7C',
      500: '#444444',
      600: '#3C3C3C',
      700: '#2A2A2A',
      800: '#181818',
      900: '#0C0C0C',
    },
    secondary: {
      50: '#F6FAFD',
      100: '#EAF2F7',
      200: '#CCE1F1',
      300: '#ADD0EB',
      400: '#70AFE1',
      500: '#339EE6',
      600: '#2E8BCD',
      700: '#1F5B87',
      800: '#143D58',
      900: '#0B2030',
    },
    tertiary: {
      50: '#FAF8FD',
      100: '#F1ECF9',
      200: '#E1D1F4',
      300: '#D1B6EF',
      400: '#B380E4',
      500: '#955AE9',
      600: '#8551D3',
      700: '#59368C',
      800: '#3D245D',
      900: '#201230',
    },
  },
  fonts: {
    body: '\'Roboto\', sans-serif',
    heading: '\'Montserrat\', sans-serif',
  },
  shadows: {
    outline: '0 0 0 3px #FBD38D',
    md: '8px 0 10px -5px rgba(0, 0, 0, 0.2)',
    lg: '10px 0 15px -5px rgba(0, 0, 0, 0.2)',
    xl: '20px 0 25px -5px rgba(0, 0, 0, 0.2)',
  },
  button: {
    bg: 'secondary.900',
    _hover: {
      boxShadow: 'outline',
      bg: 'secondary.200',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'primary.50',
        color: 'primary.900',
      },
    },
  },
});

export default theme;
