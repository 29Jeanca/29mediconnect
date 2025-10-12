from rest_framework import serializers
from .models import Usuario, DoctorProfile, PacienteProfile
from django.contrib.auth.password_validation import validate_password

# Serializer para PacienteProfile
class PacienteProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PacienteProfile
        fields = ['grupo_sanguineo', 'condiciones_medicas', 'ocupacion', 'alias']

# Serializer para DoctorProfile
class DoctorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorProfile
        fields = ['especialidad', 'cedula', 'experiencia', 'especialidad_medica',
                  'biografia', 'estado_academico', 'cedula_profesional', 'hospital_afiliado', 'nombre_profesional']

# Serializer principal de Usuario
class UsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    paciente_profile = PacienteProfileSerializer(required=False)
    doctor_profile = DoctorProfileSerializer(required=False)

    class Meta:
        model = Usuario
        fields = ['id', 'email', 'nombre', 'apellido', 'fecha_nacimiento', 'genero',
                  'numero_identificacion', 'telefono', 'direccion', 'ciudad', 'pais', 'rol',
                  'password', 'password2', 'paciente_profile', 'doctor_profile']

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Las contraseñas no coinciden."})
        return attrs

    def create(self, validated_data):
        paciente_data = validated_data.pop('paciente_profile', None)
        doctor_data = validated_data.pop('doctor_profile', None)
        validated_data.pop('password2', None)

        user = Usuario.objects.create_user(
            email=validated_data['email'],
            nombre=validated_data['nombre'],
            apellido=validated_data.get('apellido', ''),
            fecha_nacimiento=validated_data.get('fecha_nacimiento'),
            genero=validated_data.get('genero'),
            numero_identificacion=validated_data.get('numero_identificacion'),
            telefono=validated_data.get('telefono'),
            direccion=validated_data.get('direccion'),
            ciudad=validated_data.get('ciudad'),
            pais=validated_data.get('pais'),
            rol=validated_data.get('rol', 'paciente'),
            password=validated_data['password']
        )

        if user.rol == 'paciente' and paciente_data:
            PacienteProfile.objects.create(usuario=user, **paciente_data)

        if user.rol == 'doctor' and doctor_data:
            DoctorProfile.objects.create(usuario=user, **doctor_data)

        return user
