// Info from here https://openweathermap.org/current


const KEY = "9cd3d3b375a2494104216d24107c2a7e";

// Cuando cargue la web
window.addEventListener('load', () => {
    let lon;
    let lat;


    // Mis variables del DOM
    let valor = document.getElementById("valor"),
        descripcion = document.getElementById("descripcion"),
        ubicacion = document.getElementById("ubicacion"),
        icono = document.getElementById("icono");

    // Usuario allow y robamos posicion del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {

            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;

            //url de la api
            //units = celsius, lang = language lon y lat se le aplica el numero robado arriba
            const url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=es&lat=${lat}&lon=${lon}&appid=${KEY}`;

            //me costo un toque entender como funciona fetch xq usa promise, estudiarlo mas
            // fetch https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
            fetch(url)
                .then(response => response.json())
                .then(data => {

                    //temperatura y redondeamos
                    let temp = Math.round(data.main.temp);
                    valor.textContent = `${temp} °C`;

                    
                    let desc = data.weather[0].description;
                    descripcion.textContent = desc;

                    ubicacion.textContent = data.name;

                    //icono
                    let iconCode = data.weather[0].icon;
                    function iconChange() {
                        icono.setAttribute("src", `http://openweathermap.org/img/wn/${iconCode}.png`);
                    }
                    iconChange();
                })
        })

    }
})