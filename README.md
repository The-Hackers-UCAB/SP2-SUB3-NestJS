# myOnlineDoctor NestJS Web Service

Servicio Web en NestJS para la entrega del [2do ShortPaper](/docs/2erShortPaper-Sub3.pdf) de la materia Desarrollo de Software.

## Diagramas

### UML Clases

![UML Clases](/docs/diagrama-clases-nest.png)

### UML Secuencia

![UML Secuencia](/docs/diagrama-secuencia-nest.png)

### Grafo de dependencias

![Grafo de dependencias](/docs/dependencygraph.png)

## Instalación

0. Crear y llenar la base de datos relacional PostgreSQL con los [scripts](DB/scripts) SQL
1. Llenar el archivo **".env.template"** con las credenciales de la base de datos y cambiarle el nombre a **".env"**
2. Ejecutar el comando **npm i**
3. Ejecutar el comando **npm start**

## Aportes por integrante

| Integrante      | Commit                                                                                                           | Aporte                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Antonio Badillo | [+ 1d88c73](https://github.com/The-Hackers-UCAB/SP2-SUB3-NestJS/commit/1d88c7307062f6d2c68647884690b47fa6da3253) | Imágenes, MER y script de las base de datos relacional                        |
| Antonio Badillo | [+ a53a377](https://github.com/The-Hackers-UCAB/SP2-SUB3-NestJS/commit/1d88c7307062f6d2c68647884690b47fa6da3253) | Aplicación base de NestJS con integración con Docker, Heroku y Github Actions |
| Gabriel Ojeda | [+ abc5d8f](https://github.com/The-Hackers-UCAB/SP2-SUB3-NestJS/commit/abc5d8fe447d81eb0e6d30f7c677c31973eb9da8) | Primer desacoplamiento de la API (referente a la capa de service interface) |
| Gabriel Ojeda | [+ 2348a0d](https://github.com/The-Hackers-UCAB/SP2-SUB3-NestJS/commit/2348a0d967763c9241015b0e621c2518c5a8081c) | Crear handlers para separar responsabilidades entre capas |
| Gabriel Ojeda | [+ 06a2fed](https://github.com/The-Hackers-UCAB/SP2-SUB3-NestJS/commit/06a2fed846b72a3d991457c71b1472af00bb8411) | Definición capa de resource |
