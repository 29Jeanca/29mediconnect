import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Paper, Box, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';
import StepPersonalInfo from './StepPersonalInfo';
import StepContactInfo from './StepContactInfo';
import StepAccountDetails from './StepAccountDetails';

const steps = ['Información Personal', 'Información de Contacto', 'Detalles de la Cuenta'];

export default function RegistrationForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [userType, setUserType] = useState('doctor');
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    setActiveStep(prev => prev + 1);
  };

  const handleBack = () => setActiveStep(prev => prev - 1);
  const handleUserTypeChange = (_, newType) => {
    if (newType) {
      setUserType(newType);
      setActiveStep(0);
      setFormData({});
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 700, margin: 'auto' }}>
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>MediConnect</Typography>
        <ToggleButtonGroup
          value={userType}
          exclusive
          onChange={handleUserTypeChange}
          sx={{ mb: 2 }}
          color="primary"
          aria-label="Tipo de usuario"
          
        >
          <ToggleButton value="paciente">Paciente</ToggleButton>
          <ToggleButton value="doctor">Doctor</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map(label => (
          <Step key={label}><StepLabel>{label}</StepLabel></Step>
        ))}
      </Stepper>

      {activeStep === 0 && <StepPersonalInfo onNext={handleNext} userType={userType} />}
      {activeStep === 1 && <StepContactInfo onNext={handleNext} onBack={handleBack} userType={userType} />}
      {activeStep === 2 && <StepAccountDetails onBack={handleBack} formData={formData} userType={userType} />}
    </Paper>
  );
}