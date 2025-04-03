// src/types/auth.ts
import { User } from "firebase/auth";

// Tipo para o usuário da aplicação
export interface AppUser {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  // Adicione outras propriedades conforme necessário
}

// Tipo para o contexto de autenticação
export interface AuthContextType {
  currentUser: AppUser | null;  // Aqui usamos AppUser diretamente
  loading: boolean;
}

// Função de conversão corrigida
export function firebaseUserToAppUser(user: User | null): AppUser | null {
  if (!user) return null;
  
  return {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL
    // Outras propriedades do User que você queira incluir
  };
}