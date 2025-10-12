import { useEffect,useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

export default function StepContactInfo({ onNext, onBack, userType }) {
  const [data, setData] = useState({
    telefono: '', correo: '', direccion: '', ciudad: '', pais: '', lugarPractica: ''
  });

  const creacionUsuario = () => {
    if (userType === 'doctor') {
      if(data.lugarPractica){
      let docInfo = JSON.parse(localStorage.getItem('doctor'));
      docInfo = { ...docInfo, ...data };
      localStorage.setItem('doctor', JSON.stringify(docInfo));
      onNext(data);
    }
    }
    if (userType === 'paciente') {
        if(data.telefono || data.correo || data.ciudad || data.pais || data.direccion){
        let pacInfo = JSON.parse(localStorage.getItem('paciente'));
        pacInfo = { ...pacInfo, ...data };
        localStorage.setItem('paciente', JSON.stringify(pacInfo));
        onNext(data);
      }
  }
}
  useEffect(() => {
    const cargarDatos = () => {
      if (userType === "doctor") {
        const prevDocInfo = JSON.parse(localStorage.getItem("doctor"));
        if (prevDocInfo) {
          setData((prev) => ({
            ...prev,
            telefono: prevDocInfo.telefono || "",
            correo: prevDocInfo.correo || "",
            direccion: prevDocInfo.direccion || "",
            ciudad: prevDocInfo.ciudad || "",
            pais: prevDocInfo.pais || "",
            lugarPractica: prevDocInfo.lugarPractica || ""

          }));
        }
      }
      if (userType === "paciente") {
        const prevPacInfo = JSON.parse(localStorage.getItem("paciente"));
        if (prevPacInfo) {
          setData((prev) => ({
            ...prev,
            telefono: prevPacInfo.telefono || "",
            correo: prevPacInfo.correo || "",
            direccion: prevPacInfo.direccion || "",
            ciudad: prevPacInfo.ciudad || "",
            pais: prevPacInfo.pais || ""
          }));
        }
      }
    };
    cargarDatos();
  }, [userType]);
  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

  return (
    <Stack spacing={2}>
      <TextField label="Teléfono" name="telefono" value={data.telefono} onChange={handleChange} />
      <TextField label="Correo electrónico" name="correo" value={data.correo} onChange={handleChange} />
      <TextField label="Dirección" name="direccion" value={data.direccion} onChange={handleChange} />
      <TextField label="Ciudad" name="ciudad" value={data.ciudad} onChange={handleChange} />
      <TextField label="País" name="pais" value={data.pais} onChange={handleChange} />

      {userType === 'doctor' && (
        <TextField label="Lugar de práctica actual" name="lugarPractica" value={data.lugarPractica} onChange={handleChange} />
      )}

      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={onBack}>Atrás</Button>
        <Button variant="contained" onClick={() => {
          creacionUsuario();
        }}>Siguiente</Button>
      </Stack>
    </Stack>
  );
}