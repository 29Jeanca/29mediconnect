from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager


# Creo el manager que controla la estandardizacion de los usuarios

class UsuarioManager(BaseUserManager):
    # creacion de usuarios normales
    def create_user(self,email,nombre,password=None,**extra_fields):
        if not email:
            raise ValueError('El usuario debe tener un email')
        email=self.normalize_email(email) # pasamos el correo a minusculas
        usuario=self.model(email=email,nombre=nombre,**extra_fields) # se crea el usuario
        usuario.set_password(password) # se encripta la contraseña
        usuario.save(using=self._db) # se guarda en la base de datos
        return usuario # se retorna el usuario creado
    
    # creacion de superusuarios
    def create_superuser(self,email,nombre,password=None,**extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser',True)
        extra_fields.setdefault('is_active',True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('El superusuario debe tener is_staff=True') 
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('El superusuario debe tener is_superuser=True')
        
        return self.create_user(email,nombre,password,**extra_fields) 


# El modelo que SI se usa como usuario

class Usuario(AbstractBaseUser,PermissionsMixin):
    ROLES_USUARIO=(
        ('paciente','Paciente'),
        ('doctor','Doctor'),
        ('admin','Admin'),
    )
    email=models.EmailField(unique=True,max_length=255)
    nombre=models.CharField(max_length=255)
    apellido=models.CharField(max_length=255,blank=True,null=True)
    fecha_nacimiento=models.DateField(blank=True,null=True)
    genero = models.CharField(max_length=10, blank=True, null=True)
    numero_identificacion = models.CharField(max_length=50, unique=True, blank=True, null=True)
    telefono = models.CharField(max_length=20, blank=True, null=True)
    direccion = models.CharField(max_length=255, blank=True, null=True)
    ciudad = models.CharField(max_length=100, blank=True, null=True)
    pais = models.CharField(max_length=100, blank=True, null=True)

    rol = models.CharField(
        max_length=20,
        choices=ROLES_USUARIO,
        default='paciente'
    )
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    
    fecha_creacion=models.DateTimeField(auto_now_add=True)

    # Manager (toma la validacion que hice en UsuarioManager)
    objects=UsuarioManager()

    # Defino con que campo se va a loguear
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['nombre']

    def __str__(self):
        return f"{self.nombre} ({self.email})"

    def save(self, *args, **kwargs):
        if self.nombre:
            self.nombre = self.nombre.title().strip()
        if self.apellido:
            self.apellido = self.apellido.title().strip()
        self.email = self.email.lower().strip()
        super().save(*args, **kwargs)

class DoctorProfile(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)
    especialidad = models.CharField(max_length=100)
    cedula = models.CharField(max_length=20, unique=True)
    experiencia = models.IntegerField()  # años
    especialidad_medica = models.CharField(max_length=100, blank=True, null=True)
    biografia = models.TextField(blank=True, null=True)
    estado_academico = models.CharField(max_length=100, blank=True, null=True)
    cedula_profesional = models.CharField(max_length=50, blank=True, null=True)
    hospital_afiliado = models.CharField(max_length=100, blank=True, null=True)
    nombre_profesional = models.CharField(max_length=100, blank=True, null=True)

    
class PacienteProfile(models.Model):
    GRUPOS_SANGUINEOS = [
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
    ]
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)
    # INFORMACION PERSONAL
    grupo_sanguineo = models.CharField(max_length=3, choices=GRUPOS_SANGUINEOS, blank=True, null=True)
    condiciones_medicas = models.TextField(blank=True, null=True)
    ocupacion = models.CharField(max_length=100, blank=True, null=True)
   
    # Detalles
    alias = models.CharField(max_length=100, blank=True, null=True)
    

