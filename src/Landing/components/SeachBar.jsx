import React from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  InputAdornment,
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ term, onTermChange, onSearch }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        p: 3,
        width: "100%",
        maxWidth: "1300px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: "100%",
          flexWrap: "nowrap",
          "@media (max-width:768px)": {
            flexDirection: "column",
            alignItems: "stretch",
            gap: 1.5,
          },
        }}
      >
        <TextField
          placeholder="Buscar por nombre o especialidad..."
          variant="outlined"
          size="medium"
          fullWidth
          value={term}
          onChange={(e) => onTermChange(e.target.value)}
          sx={{
            backgroundColor: "#f9fafb",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "#e5e7eb",
              },
              "&:hover fieldset": {
                borderColor: "#d1d5db",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#2563eb",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          size="large"
          onClick={onSearch}
          sx={{
            textTransform: "none",
            backgroundColor: "#007bff",
            borderRadius: "8px",
            px: 5,
            height: "50px",
            width: "350px",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#0069d9" },
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexShrink: 0,
            "@media (max-width:768px)": {
              width: "100%",
            },
          }}
        >
          <SearchIcon fontSize="small" />
          Buscar
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          mt: 1,
          "@media (max-width:768px)": {
            flexDirection: "column",
            gap: 1.5,
          },
        }}
      >
        <FormControl size="small" sx={{ minWidth: 160, width: "20%" }}>
          <Select
            defaultValue=""
            displayEmpty
            sx={{
              borderRadius: "8px",
              backgroundColor: "#f5f7f8",
              "& fieldset": {
                borderColor: "#e5e7eb !important",
              },
            }}
          >
            <MenuItem value="">Disponibilidad</MenuItem>
            <MenuItem value="disponible">Disponible</MenuItem>
            <MenuItem value="ocupado">Ocupado</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 160, width: "20%" }}>
          <Select
            defaultValue=""
            displayEmpty
            sx={{
              borderRadius: "8px",
              backgroundColor: "#f5f7f8",
              "& fieldset": {
                borderColor: "#e5e7eb !important",
              },
            }}
          >
            <MenuItem value="">Calificación</MenuItem>
            <MenuItem value="alta">Alta</MenuItem>
            <MenuItem value="media">Media</MenuItem>
            <MenuItem value="baja">Baja</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SearchBar;
