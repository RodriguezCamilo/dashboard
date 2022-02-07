

    let refresh = function () {
        let fecha = new Date(),
            hours = fecha.getHours(),
            ampm,
            minutes = fecha.getMinutes(),
            seconds = fecha.getSeconds(),
            week = fecha.getDay(),
            day = fecha.getDate(),
            month = fecha.getMonth(),
            year = fecha.getFullYear();

        let pHours = document.getElementById("hours"),
            pAMPM = document.getElementById("ampm"),
            pMinutes = document.getElementById("minutes"),
            pSeconds = document.getElementById("seconds"),
            pWeek = document.getElementById("week"),
            pDay = document.getElementById("day"),
            pMonth = document.getElementById("month"),
            pYear = document.getElementById("year");


        const sWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        pWeek.textContent = sWeek[week];

        pDay.textContent = day;
        const sMonth = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        pMonth.textContent = sMonth[month];
        pYear.textContent = year;


        if (hours >= 12) {
            hours = hours - 12;
            ampm = "PM";
        } else {
            ampm = "AM";
        }

        if (hours == 0) {
            hours = 12;
        }

        pHours.textContent = hours;
        pAMPM.textContent = ampm;

        if (minutes < 10) { minutes = "0" + minutes };
        if (seconds < 10) { seconds = "0" + seconds };

        pMinutes.textContent = minutes;
        pSeconds.textContent = seconds;
    };

    refresh();
    let interval = setInterval(refresh, 1000);


