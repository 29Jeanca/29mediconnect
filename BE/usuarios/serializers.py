from rest_framework import serializers
from .models import Usuario, DoctorProfile, PacienteProfile
from django.contrib.auth.password_validation import validate_password

class UsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Usuario
        fields = (
            'id', 'email', 'nombre', 'apellido', 'fecha_nacimiento', 'genero', 'numero_identificacion',
            'telefono', 'direccion', 'ciudad', 'pais', 'rol', 'password', 'password2'
        )
        extra_kwargs = {
            'nombre': {'required': True},
            'rol': {'required': True},
        }

    # Validación de contraseña
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Las contraseñas no coinciden."})
        return attrs

    # Crear usuario y perfiles según rol
    def create(self, validated_data):
        validated_data.pop('password2', None)
        rol = validated_data.get('rol', 'paciente')

        # Crear usuario
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
            rol=rol,
            password=validated_data['password']
        )

        # Crear perfil según rol
        if rol == 'doctor':
            DoctorProfile.objects.create(usuario=user)
        elif rol == 'paciente':
            PacienteProfile.objects.create(usuario=user)

        return user
