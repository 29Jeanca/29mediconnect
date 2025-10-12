from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UsuarioSerializer

class RegistroUsuarioView(APIView):
    """
    Endpoint para registrar usuarios.
    """
    def post(self, request):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            usuario = serializer.save()  # Aquí se llama a create()
            return Response(
                {
                    "mensaje": "Usuario creado correctamente",
                    "usuario": {
                        "id": usuario.id,
                        "email": usuario.email,
                        "nombre": usuario.nombre,
                        "apellido": usuario.apellido,
                        "rol": usuario.rol
                    }
                },
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
