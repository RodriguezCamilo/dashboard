const nombre = document.getElementsByName("nombre").value;
let namardo = localStorage.getItem("nombre");

// Si tenemos info en storage
if (localStorage.getItem("nombre")) {
        const para = document.createElement("p");

        para.innerHTML = `Bienvenido ${namardo}`;

        document.getElementById("name").appendChild(para);
}

// Si no tenemos

else {

// Crea la info
    localStorage.setItem("nombre", nombre);

// Cambiamos DOM para preguntar por el nombre

    if (localStorage.getItem("nombre", undefined)) {
        $("#pregunta").replaceWith("<div id='pregunta'>¿Cual es tu nombre?</div>");
        $("#name").replaceWith("<input id='name' value='' onblur='getVal()'>");
        $("#submit").replaceWith("<button id='submit'>Submit</button>");
    } 

    function getVal() {
        const val = document.querySelector('input').value;
        localStorage.setItem("nombre", (val));
    }

    $("#submit").click(() => {

        $("#pregunta").replaceWith("<div id='pregunta'></div>");
        $("#name").replaceWith("<div id='name'></div>");
        $("#submit").replaceWith("<div id='submit'></div>");

        const para = document.createElement("p");

        namardo = localStorage.getItem("nombre");

        para.innerHTML = `Bienvenido ${namardo}`;

        document.getElementById("name").appendChild(para);
    })
}


//jasjsajask me di cuenta que si hubiera usado textcontent me habria ahorrado codigo creo y ademas fue antes de la clase de efectos rayos bueno sale un lolcito?
