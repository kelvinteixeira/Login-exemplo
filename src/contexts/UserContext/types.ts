export interface User {
  name: string;
  photo: string;
  email?: string;
  uid?: string; // Adicione campos adicionais conforme necessário
}

export type UserContextType = {
  user: User | null;
  login: (userData: User) => void; // Tipo explícito aqui
  logout: () => void;
};