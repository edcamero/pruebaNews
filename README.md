# Api de Noticas y clima 

Api construida utilizando .net y React, con la que se puede consultar el nombre de una ciudad y cuyo datos de respuesta son: datos de clima y noticias.


Tecnologias usadas:
- .Net
- React js
- Matarial UI
- SQLServer
- Visual Studio 2019


En el proyecto existe dos directorios app_frontend y app_backend.

Ejecutar el script de la base de datos: ingresa al directorio app_backend\app_backend\Database. donde encontrara un archivo sql copiar y ejecutar en SQLServer.


Configurar la conección de la base de datos:

Ingresa en el archivo appsettings.json que se encuentra dentro de app_backend/app_backend/



Modificar la configuración para su servidor SQLServer:

~~~
 "ConnectionStrings": {
    "ConnectionStrings": "<YOUR_CONNECTION_SERVER>"
  }
~~~
luego ejecuta el proyecto desde Visual Studio 

configuracion de su Frontend


Ingresa en el directorio app_frontend y en el terminal ejecuta:

~~~
yarn install
yarn start
~~~

