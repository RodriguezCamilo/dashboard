const KEY = "9cd3d3b375a2494104216d24107c2a7e";

window.addEventListener('load', () => {
    let lon;
    let lat;


    // Mis variables del DOM
    let temperaturaValor = document.getElementById('temperatura-valor');
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion');
    let ubicacion = document.getElementById('ubicacion');
    let icono = document.getElementById('icono');
    let vientoVelocidad = document.getElementById('viento-velocidad');

    //Usuario allow y robamos posicion del objeto
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {

            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;

            //url de la api
            const url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=es&lat=${lat}&lon=${lon}&appid=${KEY}`;

            //esto me costo un toque entender como funciona fetch xq usa promise
            fetch(url)
                .then(response => { return response.json() })
                .then(data => {

                    let temp = Math.round(data.main.temp);
                    temperaturaValor.textContent = `${temp} ° C`;

                    let desc = data.weather[0].description;

                    temperaturaDescripcion.textContent = desc;
                    ubicacion.textContent = data.name;

                    vientoVelocidad.textContent = `${data.wind.speed} m/s`;

                    let iconCode = data.weather[0].icon;

                    function iconChange() {
                        icono.setAttribute("src", `http://openweathermap.org/img/wn/${iconCode}.png`);
                    }
                    iconChange();

                })
                .catch(error => {
                    console.log(error);
                })
        })

    }
})