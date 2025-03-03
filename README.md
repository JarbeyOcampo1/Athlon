# Athlon

### Descripcion general del proyecto:
El proyecto consiste en crear un sistema para un gimnasio  que permita a los empleados o 
personas que trabajen en el gimnasio poder realizar un seguimiento de los clientes, planes y facturas 

la aplicacion contiene: 

-CRUD  para clientes, planes y facturas y sus relacion que le permita al usuario poder actualizar, buscar
eliminar y crear nuevos datos de los clientes, planes y facturas.

-Tener un registro y incio de sesion para los empleados o administrativos de la pagina web con el fin 
de tener un control de quienes entrar a la pagina web y pueda realizar las acciones de CRUD.

-Darle solucion a los problemas que lleva el gimnasio a la hora de poder realizar un seguimiento
de los clientes, planes y facturas, puesto que estas personas lleva acabo estas tareas de manera manual
malgastando tiempo y recursos.

### Caracteristicas del backend

- **clonar el proyecto:** dentro de una carpeta abre un CMD o power shell copia este codigo 
git clone https://github.com/JarbeyOcampo1/Athlon.git , despues cd nombre del proyecto y code . para abrirlo con VSCode.

*Debes modificiar el archivo application.properties para que se conecte a tu base de datos local
Ingresa a la carpeta src > resources > application.properties y tener una base de datos ya creada dependiendo 
que base de datos manejes , si es mysql, postgresql, oracle, etc. la sintaxis varia, para este proyecto se uso MYSQL

```Java
spring.datasource.url=jdbc:mysql://localhost:3306/(Nombre de la base de datos)?useSSL=false&serverTimezone=UTC
spring.datasource.username=nombre del usuario que maneja la base de datos
spring.datasource.password= contraseña del usuario que maneja la base de datos
spring.jpa.hibernate.ddl-auto=update

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
```

- **URL Y PUERTO** http://localhost:8080/(RequestMapping)

*Se utilizo openjdk version 17 y spring boot 3.4.2 para el desarrollo de este proyecto.