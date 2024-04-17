# Competición de Coches en Pista

## Descripción

Crea un programa que simule la competición de dos coches en una pista.

- Los dos coches estarán representados por 🚙 y 🚗. Y la meta por 🏁.
- Cada pista tendrá entre 1 y 3 árboles 🌲 colocados de forma aleatoria.
- Las dos pistas tendrán una longitud configurable de guiones bajos "_".
- Los coches comenzarán en la parte derecha de las pistas. Ejemplo:
  🏁____🌲_____🚙
  🏁_🌲____🌲___🚗

El juego se desarrolla por turnos de forma automática, y cada segundo se realiza una acción sobre los coches (moviéndose a la vez), hasta que uno de ellos (o los dos a la vez) llega a la meta.

- Acciones:
  - Avanzar entre 1 a 3 posiciones hacia la meta.
  - Si al avanzar, el coche finaliza en la posición de un árbol, se muestra 💥 y no avanza durante un turno.
  - Cada turno se imprimen las pistas y sus elementos.
  - Cuando la carrera finalice, se muestra el coche ganador o el empate.

## Datos de Resolución

- Lenguaje: JavaScript

## Forma de Ejecución

Para ejecutar el programa, cópialo y pégalo en un entorno de ejecución de JavaScript, como Node.js o cualquier navegador web moderno.
