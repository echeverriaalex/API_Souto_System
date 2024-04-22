# Sobre este repositorio:

- Es un repositorio con la unica finalidad de practicar.
- La configuracion del archivo config.json hace referencia a una base de datos unicamente local en el dispositivo el que se ejecute, utilizando el motor de MySql (si este proyecto no fuese a modo se practica se usaria otra configuracion y aplicando configuracion de variables de entorno).
- Esta API fue desarrollada con NodeJS utillizando las dependecias de body-parser, cors, dotenv, express, morgan, mysql2 y sequelize.

# End Points:
- POST: '/product' -> para registrar un nuevo producto
- GET:  '/products' -> retorna todos los productos registrados en la base de datos
- GET:  '/product/:code'-> si se encuentra en la base de datos un producto registrado con exactamente el mismo codigo (tambien llamado ID) que se le solicita por url se retorna dicho producto especifico.

### En caso de que se ingrese un end point no establecido en la apicacion se obtendra un mensaje con el siguien mensaje:  "Error point not found"
