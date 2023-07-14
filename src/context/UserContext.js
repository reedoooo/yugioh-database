import {createContext} from 'react';

export const UserContext = createContext({
  user: null,
  userID: null,
  setUser: () => {},
});
