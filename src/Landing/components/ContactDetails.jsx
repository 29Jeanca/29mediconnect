import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactDetailsLanding = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9fafb",
        borderRadius: "12px",
        p: 3,
        maxWidth: 400,
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          color: "#111827",
          mb: 2,
        }}
      >
        Información de Contacto
      </Typography>

      {/* Teléfono */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          gap: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#eff6ff",
            borderRadius: "12px",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PhoneIcon sx={{ color: "#2563eb" }} />
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 600, color: "#111827" }}>
            Teléfono
          </Typography>
          <Typography sx={{ color: "#6b7280" }}>+1-555-123-4567</Typography>
        </Box>
      </Box>

      {/* Correo electrónico */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          gap: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#eff6ff",
            borderRadius: "12px",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EmailIcon sx={{ color: "#2563eb" }} />
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 600, color: "#111827" }}>
            Correo Electrónico
          </Typography>
          <Typography sx={{ color: "#6b7280" }}>
            support@mediconnect.com
          </Typography>
        </Box>
      </Box>

      {/* Dirección */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#eff6ff",
            borderRadius: "12px",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LocationOnIcon sx={{ color: "#2563eb" }} />
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 600, color: "#111827" }}>
            Dirección
          </Typography>
          <Typography sx={{ color: "#6b7280" }}>
            123 Health Street, Cityville, State 12345
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDetailsLanding;
