const jugador1 = prompt("¿Cuál es tu increíble nombre, jugador1?");
const jugador2 = prompt("¿Cuál es tu increíble nombre, jugador2?");

document.getElementById("nombre-jugador1").innerText = `${jugador1}`;
document.getElementById("nombre-jugador2").innerText = `${jugador2}`;

let arma1 = "";
let arma2 = "";

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
  const laOpcionPulsada = document.getElementById(identificador);
  laOpcionPulsada.classList.add("opcion-escogida");
  if (jugador === "1") {
    alert(`El jugador ${jugador1} escogio ${arma}`);
    arma1 = arma;
  } else if (jugador === "2") {
    alert(`El jugador ${jugador1} escogio ${arma}`);
    arma2 = arma;
  }
}

function jugar() {
  alert(anunciarGanadore(determinarGanador(arma1, arma2), jugador1, jugador2));
}
