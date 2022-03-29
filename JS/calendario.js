//Con este es con el que mas vueltas di y por eso se me retraso el proyecto, eso que el objeto Date ya lo habia usado en el reloj antes.

const date = new Date();

//Marco el inicio del mes y me sirve como referencia
date.setDate(1);

const dias = document.querySelector(".days");

//Meses
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//Reemplazamos el h2 por el mes
document.querySelector(".date h2").innerHTML = meses[date.getMonth()];

//Variable dia que sera rellenada por dias anteriories, actuales y del mes siguiente
let dia = "";

//Con esta const tomamos cual es el ultimo dia del mes y cuantos dias tiene el mes
const ultimoDia = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
).getDate();

//Con esto sacamos el ultimo dia del mes anterior
const diaAnterior = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
).getDate();

const firstDayIndex = date.getDay();

//Con esto sacamos que dia de la semana esta posicionado el ultimo dia del mes actual
const ultimoDiaActual = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
).getDay();

//Definimos cuantos dias quedan libres en el calendario para llenar
const diasSiguientes = 7 - ultimoDiaActual - 1;

//Definimos que dia de la semana debe arrancar el mes y dibujamos los dias del mes anterior
for (let x = firstDayIndex; x > 0; x--) {
    dia += `<div class="diaAnterior">${diaAnterior - x + 1}</div>`;
}

//Creo un bucle para generar en el DOM los dias y marcar cual es el dia actual
for (let i = 1; i <= ultimoDia; i++) {
    if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
    ) {
        dia += `<div class="hoy">${i}</div>`;
    } else {
        dia += `<div>${i}</div>`;
    }
}

//Y aca dibujamos los dias que inician el mes siguiente
for (let j = 1; j <= diasSiguientes; j++) {
    dia += `<div class="diaSiguiente">${j}</div>`;
    dias.innerHTML = dia;
}