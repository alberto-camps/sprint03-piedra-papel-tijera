/* Código JS Alberto Camps */

// Seleccionamos todos los botones de jugada
const botones = document.querySelectorAll('.boton-jugada');

// Elementos donde mostraremos los resultados y los contadores
const resultados = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');

// Contadores de puntos
let puntosUsuario = 0;
let puntosOrdenador = 0;

// Función para que la computadora elija aleatoriamente
function jugadaOrdenador() {
  const opciones = ['piedra', 'papel', 'tijera'];
  const indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice];
}

// Función que determina el ganador
function determinarGanador(jugadaUsuario, jugadaPC) {
  if (jugadaUsuario === jugadaPC) {
    return 'Empate';
  } else if (
    (jugadaUsuario === 'piedra' && jugadaPC === 'tijera') ||
    (jugadaUsuario === 'papel' && jugadaPC === 'piedra') ||
    (jugadaUsuario === 'tijera' && jugadaPC === 'papel')
  ) {
    puntosUsuario++;
    return '¡Ganaste esta ronda!';
  } else {
    puntosOrdenador++;
    return 'Perdiste esta ronda...';
  }
}

// Función principal para jugar
function jugar(event) {
  const jugadaUsuario = event.target.dataset.jugada;
  const jugadaPC = jugadaOrdenador();
  const resultado = determinarGanador(jugadaUsuario, jugadaPC);

  // Mostrar el resultado en el HTML
  resultados.innerHTML = `
    <p>Tú elegiste: <strong>${jugadaUsuario}</strong></p>
    <p>La computadora eligió: <strong>${jugadaPC}</strong></p>
    <h3>${resultado}</h3>
  `;

  // Actualizar los contadores
  contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
  contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
}

// Agregar eventos a cada botón
botones.forEach(boton => {
  boton.addEventListener('click', jugar);
});













/* Capturar resultados */





/* botonPiedra.addEventListener('click', function () {
  contador-usuario.innerHTML = 'OUUYEAH!!!';}); */