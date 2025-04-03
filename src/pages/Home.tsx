// src/pages/Home.tsx
import { Button, Typography, Box, Avatar } from '@mui/material';
import { useUser } from '../hooks/useUser';

export const Home = () => {
  const { user, logout } = useUser();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 2,
        p: 3,
      }}
    >
      {user ? (
        <>
          <Avatar
            src={user.photo}
            alt={user.name}
            sx={{ width: 100, height: 100 }}
          />
          <Typography variant="h4">Bem-vindo, {user.name}!</Typography>
          {user.email && (
            <Typography variant="subtitle1">{user.email}</Typography>
          )}
          <Button
            variant="contained"
            color="secondary"
            onClick={logout}
            sx={{ mt: 2 }}
          >
            Sair
          </Button>
        </>
      ) : (
        <Typography variant="h5">Por favor, faça login</Typography>
      )}
    </Box>
  );
};