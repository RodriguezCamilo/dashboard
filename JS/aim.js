$(() => {
    //para el START
    let ready = false;
    $("#start").click(() => {
        // Asi solucione que el start iniciaba el contador de tiempo muchas veces
        if (ready == false) {
            ready = true;

            let score = 0;
            let time = 61;

            // Comportamiento de la pelota y sumamos puntos
            $("#player").click(() => {
                score++;
                randNum = Math.round(Math.random() * 450);
                randNum2 = Math.round(Math.random() * 460);
                document.getElementById("player").style.marginTop = randNum + "px";
                document.getElementById("player").style.marginLeft = randNum2 + "px";
                document.getElementById("puntos").innerHTML = "Puntos: <b>" + score + "</b>";
            })

            // Si tocamos el fondo restamos puntos
            $("#back").click(() => {
                score--;
                if (score < 0){score = 0 };
                document.getElementById("puntos").innerHTML = "Puntos: <b>" + score + "</b>";
            })

            // Hacemos la funcion de tiempo que luego es actualizada por el intervalo cada 1 seg
            function restarTiempo() {
                time--;
                document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp; Tiempo: " + time;

                // De esta forma detengo el tiempo cuando se acaba el juego y seteo para que se pueda volver a jugar
                if (time == 0) {
                    clearInterval(intervalo);
                    ready = false;
                }
            }
            intervalo = setInterval(restarTiempo, 1000);
        }

    })
})