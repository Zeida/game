const jugador1 = prompt("¿Cuál es tu increíble nombre, jugador1?");
const jugador2 = prompt("¿Cuál es tu increíble nombre, jugador2?");

let arma1 = "";
let arma2 = "";

/* unction obtenerOpcionJugador(jugador) {
  let arma = prompt(`Hola ${jugador}. ¿Qué arma te gustaría usar? Escriba: piedra🪨, papel🧻, tijeras✂️, lagarto🦕 o spock🤖`);
  let estabien = esOpcionValida(arma);

  while (estabien === false) {
    arma = prompt(`Perdona no te he entendido🤐 ${jugador}. ¿Qué arma te gustaría usar? Escriba: piedra🪨, papel🧻, tijeras✂️, lagarto🦕 o spock🤖`);
    estabien = esOpcionValida(arma);
  }

  return arma;
} */

/* function esOpcionValida(arma) {
  switch (arma.toLowerCase()) {
  case "tijeras":
    return true;

  case "papel":
    return true;

  case "piedra":
    return true;

  case "lagarto":
    return true;

  case "spock":
    return true;

  default:
    return false;
  }
} */

function determinarGanador(jugador1, jugador2) {
  const reglas = {
    piedra: ["tijeras", "lagarto"],
    tijeras: ["papel", "lagarto"],
    papel: ["piedra", "spock"],
    lagarto: ["spock", "papel"],
    spock: ["tijeras", "piedra"]
  };
  if (jugador1 === jugador2) {
    return 0;
  }
  if (reglas[jugador1]?.includes(jugador2)) {
    return 1;
  }
  return 2;
}

function anunciarGanadore(codigo, nombre1, nombre2) {
  switch (codigo) {
  case 0:
    return "¡¡EMPATE!!";

  case 1:
    return `${nombre1} gana!!!!`;

  case 2:
    return `${nombre2} gana!!!!`;
  }
}

const button = document.getElementById("button");

function opcionEscogida(jugador, arma, identificador) {
  alert(`El jugador ${jugador} escogio ${arma}`);
  const laOpcionPulsada = document.getElementById(identificador);
  laOpcionPulsada.classList.add("opcion-escogida");
  if (jugador === "1") {
    arma1 = arma;
  } else if (jugador === "2") {
    arma2 = arma;
  }
}

function jugar() {
  alert(anunciarGanadore(determinarGanador(arma1, arma2), jugador1, jugador2));
}
