import {useState} from 'react';
import {UserContext} from './UserContext'; // Assuming UserContext is in the same directory

export function UserProvider({children}) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}
