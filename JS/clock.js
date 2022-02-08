// Info from here https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date

let refresh = function () {

    // Hacemos variables en base al objeto Date
    let fecha = new Date(),
        hours = fecha.getHours(),
        minutes = fecha.getMinutes(),
        seconds = fecha.getSeconds(),
        week = fecha.getDay(),
        day = fecha.getDate(),
        month = fecha.getMonth(),
        year = fecha.getFullYear();

    // Elementos del DOM
    let Hours = document.getElementById("hours"),
        Minutes = document.getElementById("minutes"),
        Seconds = document.getElementById("seconds"),
        Week = document.getElementById("week"),
        Day = document.getElementById("day"),
        Month = document.getElementById("month"),
        Year = document.getElementById("year");

    // Arrays para transformar 
    const sWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    Week.textContent = sWeek[week];

    Day.textContent = day;
    const sMonth = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    Month.textContent = sMonth[month];
    Year.textContent = year;

    Hours.textContent = hours;
    // Arreglamos los minutos y segundos
    if (minutes < 10) {
        minutes = "0" + minutes
    };
    if (seconds < 10) {
        seconds = "0" + seconds
    };

    Minutes.textContent = minutes;
    Seconds.textContent = seconds;
};

refresh();
let interval = setInterval(refresh, 1000);


