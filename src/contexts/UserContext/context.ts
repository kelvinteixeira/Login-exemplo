import { createContext } from 'react';
import { UserContextType } from './types';

// Defina um valor padrão que corresponda ao shape do seu contexto
const defaultContextValue: UserContextType = {
  user: null,
  login: () => {
    throw new Error('login function must be overridden by Provider');
  },
  logout: () => {
    throw new Error('logout function must be overridden by Provider');
  }
};

export const UserContext = createContext<UserContextType>(defaultContextValue);