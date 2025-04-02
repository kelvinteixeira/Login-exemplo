import { useState } from "react";
import {
  Button,
  Grid2,
  Typography,
  Card,
  CardContent,
  Link,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Box,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { VisibilityOff, Visibility } from "@mui/icons-material";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Credenciais enviadas:", credentials);
  };

  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/images/bgLogin.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        },
      }}
    >
      <Card
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: 450,
          backgroundColor: "#010619a4",
          backdropFilter: "blur(10px)",
          borderRadius: 3,
          border: "1px solid rgba(255, 255, 255, 0.712)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          p: 2,
        }}
      >
        <CardContent>
          <Box textAlign="center">
            <img
              src="/images/codevibeLogo.png"
              alt="Logo"
              style={{ width: 200, margin: 10 }}
            />
          </Box>

          <FormControl variant="outlined" fullWidth sx={{ mb: 3 }}>
            <InputLabel
              htmlFor="username"
              sx={{
                color: "white",
                "&.Mui-focused": {
                  color: "white",
                },
              }}
            >
              Usuário
            </InputLabel>
            <OutlinedInput
              id="username"
              label="Usuário"
              value={credentials.username}
              onChange={handleInputChange}
              required
              autoComplete="username"
              sx={{
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "& input::placeholder": {
                  color: "rgba(255, 255, 255, 0.5)",
                },
              }}
            />
          </FormControl>

          <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
            <InputLabel
              htmlFor="password"
              sx={{
                color: "white",
                "&.Mui-focused": {
                  color: "white",
                },
              }}
            >
              Senha
            </InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              label="Senha"
              value={credentials.password}
              onChange={handleInputChange}
              required
              autoComplete="current-password"
              sx={{
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? "Ocultar senha" : "Mostrar senha"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{ color: "white" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Box textAlign="right" mb={3}>
            <Link href="#" fontWeight="bold" variant="body2" underline="hover">
              Esqueceu a senha?
            </Link>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="inherit"
            fullWidth
            size="large"
            sx={{ py: 1.5 }}
          >
            Entrar
          </Button>

          <Divider
            sx={{
              my: 2,
              color: "white",
              "&.MuiDivider-root": {
                "&::before, &::after": {
                  borderColor: "white",
                },
              },
            }}
          >
            ou
          </Divider>

          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            size="large"
            startIcon={<GoogleIcon />}
            sx={{ mb: 3, py: 1.5, color: "white" }}
          >
            Entrar com Google
          </Button>

          <Typography
            variant="body2"
            textAlign="center"
            sx={{ color: "white" }}
          >
            Não possui conta?{" "}
            <Link
              href="/register"
              color="primary"
              fontWeight="bold"
              underline="hover"
            >
              Criar conta
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Grid2>
  );
};
