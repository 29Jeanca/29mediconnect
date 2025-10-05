import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "../../Global/styles/Global.css";
import "../styles/Header.css";
import { Link, useNavigate } from "react-router-dom";
const pages = ["Inicio", "Servicios", "Doctores", "Contacto"];

const LandingHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar
      position="static"
      style={{
        background: "none", 
        boxShadow: "none",  
      }}
    >
      <Container maxWidth="xl" className="landing-header">
        {/* TOOLBAR */}
        <Toolbar disableGutters sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          
          {/* ------------------ IZQUIERDA: LOGO + NOMBRE (visible siempre) ------------------ */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src="../src/Landing/imgs/LogoIcon.png"
              alt="Logo"
              style={{ width: "30px", height: "30px" }}
            />
            <Typography
              component="a"
              href="#inicio"
              noWrap
              sx={{
                fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
                letterSpacing: ".3rem",
                color: "var(--fontColor)",
                textDecoration: "none",
                fontSize: { xs: "1.2rem", md: "1.125rem" },
              }}
            >
              MediConnect
            </Typography>
          </Box>

          {/* ------------------ CENTRO: MENÚ (solo en desktop) ------------------ */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                className="nav-link"
                onClick={()=>{
                  navigate(page === "Inicio" ? "/" : `/${page.toLowerCase()}`);
                }}
                sx={{ my: 2, display: "block",color: "var(--navColor)" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* ------------------ DERECHA ICONO HAMBURGUESA ------------------ */}
          <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
            <IconButton
              size="large"
              aria-label="menu principal"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right", // abre desde la derecha
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=>{
                  navigate(page === "Inicio" ? "/" : `/${page.toLowerCase()}`);
                }}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
               <MenuItem >
                  <Typography sx={{ textAlign: "center" }}>Iniciar sesion</Typography>
                </MenuItem>
            </Menu>
          </Box>

          {/* ------------------ Parte izq ------------------ */}
          <Box sx={{ display: { xs: "none", md: "flex" },gap:0.5 }}>
              <Button 
                sx={{'backgroundColor': 'var(--btnColor)'}}
              className="btn-header-landing">Iniciar sesion</Button> 
              <Button 

                sx={{'backgroundColor': 'transparent', 'border': '2px solid var(--btnColor)', 'color': 'var(--btnColor)',}}
              className="btn-header-landing-register">Registrate</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default LandingHeader;
