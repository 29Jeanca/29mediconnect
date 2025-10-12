import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Paper,
} from "@mui/material";

const LoginForm = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f7f9fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 5,
          borderRadius: "20px",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        {/* 🔵 Logo / Nombre */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#007bff",
            mb: 1,
          }}
        >
          MediConnect
        </Typography>

        {/* 🩺 Subtítulo */}
        <Typography
          variant="body2"
          sx={{ color: "#374151", mb: 3 }}
        >
          Inicia sesión para continuar
        </Typography>

        {/* ✉️ Correo */}
        <TextField
          fullWidth
          placeholder="Correo electrónico"
          variant="outlined"
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              backgroundColor: "#fff",
              "& fieldset": { borderColor: "#e5e7eb" },
              "&:hover fieldset": { borderColor: "#d1d5db" },
              "&.Mui-focused fieldset": { borderColor: "#007bff" },
            },
          }}
        />

        {/* 🔒 Contraseña */}
        <TextField
          fullWidth
          placeholder="Contraseña"
          type="password"
          variant="outlined"
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              backgroundColor: "#fff",
              "& fieldset": { borderColor: "#e5e7eb" },
              "&:hover fieldset": { borderColor: "#d1d5db" },
              "&.Mui-focused fieldset": { borderColor: "#007bff" },
            },
          }}
        />

        {/* 🔵 Botón */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "25px",
            fontWeight: 600,
            py: 1.3,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#0069d9",
            },
          }}
        >
          Iniciar sesión
        </Button>

        {/* 🔗 Enlaces */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
            fontSize: "0.9rem",
          }}
        >
          <Link href="/register" underline="none" sx={{ color: "#007bff", fontWeight: 600 }}>
            Registrarse
          </Link>
          <Link href="#" underline="none" sx={{ color: "#007bff", fontWeight: 600 }}>
            ¿Olvidaste tu contraseña?
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginForm;
