// src/components/ProtectedRoute.tsx
import { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};