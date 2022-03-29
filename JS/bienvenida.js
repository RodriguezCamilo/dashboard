const nombre = document.getElementsByName("nombre").value;
let namardo = localStorage.getItem("nombre");

// Si tenemos info en storage damos la bienvenida
if (localStorage.getItem("nombre")) {
    const para = document.createElement("p");

    para.innerHTML = `Bienvenido ${namardo}`;

    document.getElementById("name").appendChild(para);

    $("#borrado").replaceWith("<button id='borrar'>X</button>");

    hacer()

}

// Si no tenemos preguntamos el nombre

else {

    // Crea la info
    localStorage.setItem("nombre", nombre);

    // Cambiamos DOM para preguntar por el nombre

    if (localStorage.getItem("nombre", undefined)) {
        $("#pregunta").replaceWith("<div id='pregunta'>¿Cual es tu nombre?</div>");
        $("#name").replaceWith("<input id='name' value='' onblur='getVal()'>");
        $("#submit").replaceWith("<button id='submit'>✓</button>");
    }
    hacer()
}

function hacer(){

    //Creamos el nombre en el DOM
    
    $("#submit").click(() => {
        $("#pregunta").replaceWith("<div id='pregunta'></div>");
        $("#name").replaceWith("<div id='name'></div>");
        $("#submit").replaceWith("<div id='submit'></div>");
        $("#borrado").replaceWith("<button id='borrar'>X</button>");

        const para = document.createElement("p");

        namardo = localStorage.getItem("nombre");

        para.innerHTML = `Bienvenido ${namardo}`;

        document.getElementById("name").appendChild(para);

        hacer()
    })


//Borramos el nombre y preguntamos uno nuevo

    $("#borrar").click(() => {
        $("#pregunta").replaceWith("<div id='pregunta'>¿Cual es tu nombre?</div>");
        $("#name").replaceWith("<input id='name' value='' onblur='getVal()'>");
        $("#submit").replaceWith("<button id='submit'>✓</button>");
        $("#borrar").replaceWith("<div id='borrado'></div>");

        hacer()
    })

}
// Esto recupera el nombre puesto en el DOM input
function getVal() {
    const val = document.querySelector('input').value;
    localStorage.setItem("nombre", (val));
}
