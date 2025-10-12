import React, { useEffect, useState } from "react";
import { TextField, Button, Stack, Alert } from "@mui/material";
import axios from "axios";

export default function StepAccountDetails({ onBack, userType }) {
  const [data, setData] = useState({
    usuario: "",
    contrasena: "",
    repetir: "",
    alias: "",
    usuarioProfesional: "",
  });
  const [pacienteInfo, setPacienteInfo] = useState({
    usuario: "",
    alias: "",
  });
  const [docInfo, setDocInfo] = useState({
    usuarioProfesional: "",
  });

  useEffect(() => {
    const cargarDatos = () => {
      if (userType === "doctor") {
        const prevDocInfo = JSON.parse(localStorage.getItem("doctor"));
        if (prevDocInfo) {
          setData((prev) => ({
            ...prev,
            usuarioProfesional: prevDocInfo.usuarioProfesional || "",
          }));
          setDocInfo({
            usuarioProfesional: prevDocInfo.usuarioProfesional || "",
          });
        }
      }
      if (userType === "paciente") {
        const prevPacInfo = JSON.parse(localStorage.getItem("paciente"));
        if (prevPacInfo) {
          setData((prev) => ({
            ...prev,
            usuario: prevPacInfo.usuario || "",
            alias: prevPacInfo.alias || "",
          }));
          setPacienteInfo({
            usuario: prevPacInfo.usuario || "",
            alias: prevPacInfo.alias || "",
          });
        }
      }
    };
    cargarDatos();
  }, [userType]);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (userType === "doctor") {
      if (data.usuarioProfesional && data.contrasena && data.repetir) {
        if (data.contrasena === data.repetir) {
          let docInfo = JSON.parse(localStorage.getItem("doctor"));
          docInfo = { ...docInfo, ...data };
          localStorage.setItem("doctor", JSON.stringify(docInfo));
        } else {
          alert("Las contraseñas no coinciden");
        }
      } else {
        alert("Por favor, completa todos los campos");
      }
      alert("Registro completado. Por favor, inicia sesión.");
    }

    if (userType === "paciente") {
      let pacInfo = JSON.parse(localStorage.getItem("paciente"));
      if (
        pacienteInfo.usuario &&
        pacienteInfo.alias &&
        data.contrasena &&
        data.repetir
      ) {
        if (data.contrasena === data.repetir) {
          pacInfo = { ...pacInfo, ...data, ...pacienteInfo };
          localStorage.setItem("paciente", JSON.stringify(pacInfo));
        } else {
          alert("Las contraseñas no coinciden");
        }
      } else {
        alert("Por favor, completa todos los campos");
      }
      alert("Registro completado. Por favor, inicia sesión.");
      await axios.post("http://127.0.0.1:8000/api/usuarios/registro/", {
        email: pacInfo.correo,
        nombre: pacInfo.nombre,
        apellido: pacInfo.apellidos,
        rol: pacInfo.rol,
        password: data.contrasena,
        password2: data.repetir,
        numero_identificacion: pacInfo.identificacion,
        ciudad: pacInfo.ciudad,
        fecha_nacimiento: pacInfo.fechaNacimiento,
        genero: pacInfo.genero,
        direccion: pacInfo.direccion,
        telefono: pacInfo.telefono,
        pais: pacInfo.pais,
        paciente_profile: {
          alias: pacInfo.alias,
          grupo_sanguineo: pacInfo.grupoSanguineo,
          condiciones_medicas: pacInfo.condicionesMedicas,
          ocupacion: pacInfo.ocupacion,
        },
      });
    }
  };

  return (
    <Stack spacing={2}>
      {userType === "doctor" && (
        <TextField
          label="Nombre de usuario profesional"
          name="usuarioProfesional"
          value={data.usuarioProfesional}
          onChange={(e) =>
            setDocInfo({ ...docInfo, usuarioProfesional: e.target.value })
          }
        />
      )}
      {userType === "paciente" && (
        <>
          <TextField
            label="Nombre de usuario"
            name="usuario"
            value={pacienteInfo.usuario}
            onChange={(e) =>
              setPacienteInfo({ ...pacienteInfo, usuario: e.target.value })
            }
          />
          <TextField
            label="Alias o nombre preferido"
            name="alias"
            value={pacienteInfo.alias}
            onChange={(e) =>
              setPacienteInfo({ ...pacienteInfo, alias: e.target.value })
            }
          />
        </>
      )}
      <TextField
        label="Contraseña"
        name="contrasena"
        type="password"
        value={data.contrasena}
        onChange={handleChange}
      />
      <TextField
        label="Repetir contraseña"
        name="repetir"
        type="password"
        value={data.repetir}
        onChange={handleChange}
      />
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={onBack}>
          Atrás
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Finalizar
        </Button>
      </Stack>
    </Stack>
  );
}
