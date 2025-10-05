import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { GitHub } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const LandingFooter = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid #e0e0e0",
        mt: 8,
        px: { xs: 4, md: 12 },
        py: 6,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
        gap: { xs: 4, md: 0 },
        backgroundColor: "white",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src="../src/Landing/imgs/LogoIcon.png"
            alt="MediConnect"
            style={{ width: 25, height: 25 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#1a1a1a",
            }}
          >
            MediConnect
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          © 2025 MediConnect. Todos los derechos reservados.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Compañía
        </Typography>
        <Link href="#" underline="hover" color="text.secondary">
          Contacto
        </Link>
        <Link href="#" underline="hover" color="text.secondary">
          Nosotros
        </Link>
        <Link href="#" underline="hover" color="text.secondary">
          Especialidades
        </Link>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Legal
        </Typography>
        <Link href="#" underline="hover" color="text.secondary">
          Términos y condiciones
        </Link>
        <Link href="#" underline="hover" color="text.secondary">
          Política de privacidad
        </Link>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Síguenos
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton color="inherit" size="small">
            <Link href="https://github.com/29Jeanca" target="_blank" rel="noopener">
            <GitHub fontSize="small" />
            </Link>
          </IconButton>
          <IconButton color="inherit" size="small">
            <Link href="https://www.linkedin.com/in/jeancarlos-barberena-ab3649265/" target="_blank" rel="noopener">
            <LinkedInIcon fontSize="small" />
            </Link>
          </IconButton>
          <IconButton color="inherit" size="small">
            <InstagramIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingFooter;
