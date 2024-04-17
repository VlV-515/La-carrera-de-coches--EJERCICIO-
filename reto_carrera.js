/*
 * Crea un programa que simule la competición de dos coches en una pista.
 * - Los dos coches estarán representados por 🚙 y 🚗. Y la meta por 🏁.
 * - Cada pista tendrá entre 1 y 3 árboles 🌲 colocados de forma aleatoria.
 * - Las dos pistas tendrán una longitud configurable de guiones bajos "_".
 * - Los coches comenzarán en la parte derecha de las pistas. Ejemplo:
 *   🏁____🌲_____🚙
 *   🏁_🌲____🌲___🚗
 *
 * El juego se desarrolla por turnos de forma automática, y cada segundo
 * se realiza una acción sobre los coches (moviéndose a la vez), hasta que
 * uno de ellos (o los dos a la vez) llega a la meta.
 * - Acciones:
 *   - Avanzar entre 1 a 3 posiciones hacia la meta.
 *   - Si al avanzar, el coche finaliza en la posición de un árbol,
 *     se muestra 💥 y no avanza durante un turno.
 *   - Cada turno se imprimen las pistas y sus elementos.
 *   - Cuando la carrera finalice, se muestra el coche ganador o el empate.
 */

class Car {
  street = [];
  positionCar = 0;
  largeStreet = 0;
  skipTurn = false;

  constructor(car) {
    this.car = car;
  }

  createStreet(large) {
    this.street = new Array(large).fill('_');
    this.street[0] = '🏁';
    this.setTrees(large);

    const lastPosition = this.street.length - 1;
    this.street[lastPosition] = this.car;
    this.positionCar = lastPosition;

    this.largeStreet = this.street.length;
  }

  setTrees(largeStreet) {
    const numberOfTrees = this.getRandomValue();
    const valuesRandomTrees = [];
    for (let i = 0; i < numberOfTrees; i++) {
      const positionTree = Math.floor(Math.random() * largeStreet);
      // Recursividad para no repetir la misma posicion del arbol en la carretera
      if (valuesRandomTrees.includes(positionTree)) {
        i--;
        continue;
      }
      this.street[positionTree] = '🌲';
      valuesRandomTrees.push(positionTree);
    }
  }

  printStreet() {
    console.log(this.street.join(''));
  }

  getRandomValue() {
    return Math.floor(Math.random() * 3) + 1;
  }

  moveCar() {
    if (this.skipTurn) {
      this.skipTurn = false;
      return;
    }
    const qtyMove = this.getRandomValue();
    if (this.street[this.positionCar] !== '💥') {
      this.street[this.positionCar] = '_';
    }
    this.positionCar -= qtyMove;
    if (this.street[this.positionCar] === '🌲') {
      this.skipTurn = true;
      this.street[this.positionCar] = '💥';
    } else {
      this.street[this.positionCar] = this.car;
    }
  }

  isWinner() {
    return this.positionCar <= 0;
  }
}

const LARGE_STREET = 100;
const VALUE_FRAMES = 1000 / 10;

const objCar1 = new Car('🚙');
const objCar2 = new Car('🚗');

objCar1.createStreet(LARGE_STREET);
objCar2.createStreet(LARGE_STREET);

const initGame = () => {
  const gameInterval = setInterval(() => {
    console.clear();

    objCar1.moveCar();
    objCar2.moveCar();

    objCar1.printStreet();
    objCar2.printStreet();

    const car1Winner = objCar1.isWinner();
    const car2Winner = objCar2.isWinner();

    if (car1Winner || car2Winner) {
      printWinner(car1Winner, car2Winner);
      clearInterval(gameInterval);
    }
  }, VALUE_FRAMES);
};

const printWinner = (win1, win2) => {
  if (win1 && win2) {
    console.log('EMPATE, AMBOS GANAN');
  } else if (win1) {
    console.log(`${objCar1.car} GANA`);
  } else if (win2) {
    console.log(`${objCar2.car} GANA`);
  }
};

initGame();
