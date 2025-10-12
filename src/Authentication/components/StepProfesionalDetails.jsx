import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

export default function StepProfessionalDetails({ onNext, onBack }) {
  const [data, setData] = useState({
    especialidad: '', estadoAcademico: '', cedulaProfesional: '',
    universidad: '', experiencia: '', lugarPractica: ''
  });

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

  return (
    <Stack spacing={2}>
      <TextField label="Especialidad médica" name="especialidad" value={data.especialidad} onChange={handleChange} />
      <TextField label="Estado académico" name="estadoAcademico" value={data.estadoAcademico} onChange={handleChange} />
      <TextField label="Cédula profesional" name="cedulaProfesional" value={data.cedulaProfesional} onChange={handleChange} />
      <TextField label="Universidad" name="universidad" value={data.universidad} onChange={handleChange} />
      <TextField label="Años de experiencia" name="experiencia" type="number" value={data.experiencia} onChange={handleChange} />
      <TextField label="Lugar de práctica actual" name="lugarPractica" value={data.lugarPractica} onChange={handleChange} />
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={onBack}>Atrás</Button>
        <Button variant="contained" onClick={() => onNext(data)}>Siguiente</Button>
      </Stack>
    </Stack>
  );
}