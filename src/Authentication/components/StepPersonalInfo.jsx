import React, { useEffect, useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

export default function StepPersonalInfo({ onNext, userType }) {
  const [data, setData] = useState({
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    genero: "",
    identificacion: "",
  });

  // Info especifica para paciente
  const [pacienteInfo, setPacienteInfo] = useState({
    grupoSanguineo: "",
    condicionesMedicas: "",
    ocupacion: "",
  });

  const [docInfo, setDocInfo] = useState({
    especialidad: "",
    estadoAcademico: "",
    cedulaProfesional: "",
  });

  // Para cargar los datos que habian antes (si es que hay)
  useEffect(() => {
    const cargarDatos = () => {
      if (userType === "doctor") {
        const prevDocInfo = JSON.parse(localStorage.getItem("doctor"));
        if (prevDocInfo) {
          setData((prev) => ({
            ...prev,
            nombre: prevDocInfo.nombre || "",
            apellidos: prevDocInfo.apellidos || "",
            fechaNacimiento: prevDocInfo.fechaNacimiento || "",
          }));
        }
      }
      if (userType === "paciente") {
        const prevPacInfo = JSON.parse(localStorage.getItem("paciente"));
        if (prevPacInfo) {
          setData((prev) => ({
            ...prev,
            nombre: prevPacInfo.nombre || "",
            apellidos: prevPacInfo.apellidos || "",
            fechaNacimiento: prevPacInfo.fechaNacimiento || "",
            genero: prevPacInfo.genero || "",
            identificacion: prevPacInfo.identificacion || "",
          }));
          setPacienteInfo({
            grupoSanguineo: prevPacInfo.grupoSanguineo || "",
            condicionesMedicas: prevPacInfo.condicionesMedicas || "",
            ocupacion: prevPacInfo.ocupacion || "",
          });
        }
      }
    };
    cargarDatos();
  }, [userType]);

  const creacionUsuario = () => {
    if (userType === "paciente") {
      if (
        !data.nombre ||
        !data.apellidos ||
        !data.fechaNacimiento ||
        !data.genero ||
        !data.identificacion ||
        !pacienteInfo.grupoSanguineo ||
        !pacienteInfo.condicionesMedicas ||
        !pacienteInfo.ocupacion
      ) {
        alert("Por favor, completa todos los campos requeridos para paciente.");
        return;
      }
      const paciente = {
        nombre: data.nombre,
        apellidos: data.apellidos,
        fechaNacimiento: data.fechaNacimiento,
        genero: data.genero,
        identificacion: data.identificacion,
        grupoSanguineo: pacienteInfo.grupoSanguineo,
        condicionesMedicas: pacienteInfo.condicionesMedicas,
        ocupacion: pacienteInfo.ocupacion,
        rol: "paciente",
      };
      localStorage.setItem("paciente", JSON.stringify(paciente));
      onNext(data);
    }
    if (userType === "doctor") {
      if (
        !data.nombre ||
        !data.apellidos ||
        !data.fechaNacimiento ||
        !docInfo.especialidad ||
        !docInfo.estadoAcademico ||
        !docInfo.cedulaProfesional
      ) {
        alert("Por favor, completa todos los campos requeridos para doctor.");
        return;
      }
      const doctor = {
        nombre: data.nombre,
        apellidos: data.apellidos,
        fechaNacimiento: data.fechaNacimiento,
        especialidad: docInfo.especialidad,
        estadoAcademico: docInfo.estadoAcademico,
        cedulaProfesional: docInfo.cedulaProfesional,
        rol: "doctor",
      };
      localStorage.setItem("doctor", JSON.stringify(doctor));
      onNext(data);
    }
  };

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <Stack spacing={2}>
      <TextField
        label="Nombre"
        name="nombre"
        value={data.nombre}
        onChange={handleChange}
      />
      <TextField
        label="Apellidos"
        name="apellidos"
        value={data.apellidos}
        onChange={handleChange}
      />
      <TextField
        label="Fecha de nacimiento"
        name="fechaNacimiento"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={data.fechaNacimiento}
        onChange={handleChange}
      />
      <TextField
        label="Género"
        name="genero"
        value={data.genero}
        onChange={handleChange}
      />
      <TextField
        label="Número de identificación"
        name="identificacion"
        value={data.identificacion}
        onChange={handleChange}
      />

      {userType === "doctor" && (
        <>
          <TextField
            label="Especialidad médica"
            name="especialidad"
            value={docInfo.especialidad}
            onChange={(e) =>
              setDocInfo({ ...docInfo, especialidad: e.target.value })
            }
          />
          <TextField
            label="Estado académico"
            name="estadoAcademico"
            value={docInfo.estadoAcademico}
            onChange={(e) =>
              setDocInfo({ ...docInfo, estadoAcademico: e.target.value })
            }
          />
          <TextField
            label="Cédula profesional"
            name="cedulaProfesional"
            value={docInfo.cedulaProfesional}
            onChange={(e) =>
              setDocInfo({ ...docInfo, cedulaProfesional: e.target.value })
            }
          />
        </>
      )}

      {userType === "paciente" && (
        <>
          <TextField
            label="Grupo sanguíneo"
            name="grupoSanguineo"
            value={pacienteInfo.grupoSanguineo}
            onChange={(e) =>
              setPacienteInfo({
                ...pacienteInfo,
                grupoSanguineo: e.target.value,
              })
            }
          />
          <TextField
            label="Condiciones médicas"
            name="condicionesMedicas"
            value={pacienteInfo.condicionesMedicas}
            onChange={(e) =>
              setPacienteInfo({
                ...pacienteInfo,
                condicionesMedicas: e.target.value,
              })
            }
          />
          <TextField
            label="Ocupacion"
            name="ocupacion"
            value={pacienteInfo.ocupacion}
            onChange={(e) =>
              setPacienteInfo({ ...pacienteInfo, ocupacion: e.target.value })
            }
          />
        </>
      )}

      <Button
        variant="contained"
        onClick={() => {
          creacionUsuario();
        }}
      >
        Siguiente
      </Button>
    </Stack>
  );
}
