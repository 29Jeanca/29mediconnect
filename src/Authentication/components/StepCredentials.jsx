import React, { useState } from 'react';
import { TextField, Button, Stack, Alert } from '@mui/material';
import axios from 'axios';
export default function StepCredentials({ onBack }) {
  const [data, setData] = useState({ usuario: '', contrasena: '', repetir: '' });
  const [error, setError] = useState('');

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });
  let allInfo = localStorage.getItem('paciente') || localStorage.getItem('doctor');

  const handleSubmit = () => {
    allInfo = { ...JSON.parse(allInfo), ...data };
    // guardarInfo()
  };

  const guardarInfo=()=>{
    axios.post(`http://127.0.0.1:8000/api/usuarios/registro/`,{
      email: allInfo.email,
      nombre: allInfo.nombre,
      apellidos: allInfo.apellidos,
      fecha_nacimiento: allInfo.fechaNacimiento,
      genero: allInfo.genero,
      identificacion: allInfo.identificacion,
      telefono: allInfo.telefono,
      direccion: allInfo.direccion,
      ciudad: allInfo.ciudad,
      pais: allInfo.pais,
      rol: allInfo.rol,
      password: allInfo.contrasena,
      password2: allInfo.repetir,
    })
  }

  return (
    <Stack spacing={2}>
      <TextField label="Nombre de usuario" name="usuario" value={data.usuario} onChange={handleChange} />
      <TextField label="Contraseña" name="contrasena" type="password" value={data.contrasena} onChange={handleChange} />
      <TextField label="Repetir contraseña" name="repetir" type="password" value={data.repetir} onChange={handleChange} />
      {error && <Alert severity="error">{error}</Alert>}
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={onBack}>Atrás</Button>
        <Button variant="contained" onClick={handleSubmit}>Finalizar</Button>
      </Stack>
    </Stack>
  );
}