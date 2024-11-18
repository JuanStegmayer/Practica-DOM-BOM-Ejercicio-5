let horas = 0,
  minutos = 0,
  segundos = 0;
let intervalo;
const cronometro = document.getElementById("cronometro");

document.getElementById("iniciar").onclick = function () {
  clearInterval(intervalo);
  intervalo = setInterval(function () {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
    cronometro.innerHTML =
      (horas < 10 ? "0" + horas : horas) +
      ":" +
      (minutos < 10 ? "0" + minutos : minutos) +
      ":" +
      (segundos < 10 ? "0" + segundos : segundos);
  }, 1000);
};

document.getElementById("pausar").onclick = function () {
  clearInterval(intervalo);
};

document.getElementById("reset").onclick = function () {
  clearInterval(intervalo);
  horas = 0;
  minutos = 0;
  segundos = 0;
  cronometro.innerHTML = "00:00:00";
};
