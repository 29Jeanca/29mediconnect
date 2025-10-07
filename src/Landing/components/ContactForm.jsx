import { Button } from '@mui/material';
import '../styles/Contact.css'
import TextField from "@mui/material/TextField";
const ContactFormLanding = () => {
  return (
    <>
      <div className='form-contact'>
        <TextField  className='contact-input-form' id="outlined-basic" label="Tu nombre" variant="outlined" />
        <TextField className='contact-input-form' id="outlined-basic" label="Tu Correo Electronico" variant="outlined" />
        <TextField className='contact-input-form' id="outlined-basic" label="Asunto" variant="outlined" />
        <TextField
          id="filled-multiline-flexible"
          label="Tu Mensaje"
          multiline
          maxRows={4}
        />

        <Button variant='contained' sx={{width:"25%",padding:"6px",fontSize:"12px"}}>Enviar Mensaje</Button>
      </div>
    </>
  );
};
export default ContactFormLanding;
