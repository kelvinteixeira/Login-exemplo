import { ReactNode, useState } from 'react';
import { UserContext } from './context';
import { User, UserContextType } from './types';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const value: UserContextType = {
    user,
    login: (userData: User) => setUser(userData),
    logout: () => setUser(null)
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };  export type { UserContextType };

