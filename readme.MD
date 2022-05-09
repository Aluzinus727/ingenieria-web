
# Ingeniería Web

Proyecto para la asignatura de Ingeniería Web ICI4240-1

# 1. Integrantes

- Angelo Alvear Tapia

# 2. Interfaces

Las interfaces de usuarios fueron modeladas antes de ser pasadas a css/html utilizando Figma. 
En el siguiente link se pueden ver las interfaces.
[Link](https://www.figma.com/file/Wve2pp8oNmqtEFvLUOMqPp/Untitled?node-id=0%3A1)

# 3. Funcionalidades de la aplicación

Las funcionalidades de la aplicación están divididas según los privilegios que posea el usuario. Podemos dividirlos en las siguientes categorías.

## 3.1 Usuario común

Un usuario común puede poseer o no cuenta en la aplicación.

- Un usuario común deberá tener acceso a una página en la que se le permita rellenar un formulario de contacto
- Un usuario común deberá tener acceso a una página de inicio de sesión y poder realizar intentos de inicio de sesión.

## 3.2 Apoderado

Un apoderado posee una cuenta en la aplicación, pero es el usuario con menos privilegios dentro de los registrados.

- Un apoderado deberá ser capaz de ver las próximas evaluaciones, calificaciones, horarios, profesores y comunicados que puedan haber dejado los docentes de la institución.
- El apoderado no será capaz de crear, eliminar o modificar ningún tipo de dato.

## 3.3 Profesores

- Un profesor será capaz de ver toda la información acerca de los cursos que sea profesor, tanto la cantidad de alumnos, el promedio general del curso, evaluaciones agendadas, ponderación de las evaluaciones e información acerca de los alumnos (nombre, RUT y notas).
- El profesor será capaz de agregar, modificar y eliminar las evaluaciones para cada uno de los cursos que posea. Además deberá ser capaz de fijar las ponderaciones tanto como modificarlas posteriormente.
- El profesor será capaz de añadir y modificar posteriormente las calificaciones de los alumnos de sus cursos, pero no será capaz de eliminarlas.
- El profesor será capaz de crear comunicados que llegarán a todos los apoderados que estime pertinente. 

## 3.4 Director/Administrador

La persona que esté a cargo de una institución tendrá acceso en un principio a las mismas funcionalidades que un profesor, pero también cuenta con las siguientes funcionalidades.

- El administrador podrá ver, añadir, modificar y eliminar profesores, cursos y alumnos, siempre y cuando pertenezcan a su establecimiento.

## Administrador Web

El administrador web es la persona con mas privilegios dentro de la aplicación

- El administrador web será capaz de ver, añadir, eliminar y modificar tanto el nombre de las instituciones como la persona que los administra.
- El administrador web también deberá ser capaz de ver, añadir, eliminar y modificar todas las cuentas de usuario según vea necesario.