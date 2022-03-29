// Elementos del DOM

const input = document.getElementById("tarea");
const lista = document.getElementById("li");
//Tuve que hacer el array con let xq no me dejaba borrarlas con el metodo que uso
let tareas = [];

//Detecta que se cargo el documento y revisa si hay tareas en el storage

inicio()
function inicio(){
    document.addEventListener('DOMContentLoaded', () => {
        tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        crear();
    })
    lista.addEventListener('click', borrar);
}

//Usuario crea una tarea nueva

function agregar(){
    const tarea = input.value;
    console.log(tarea)
    //Si no hay nada escrito no crea nada
    if (tarea === ""){
        return;
    }
    const objTarea = {
        tarea,
        //Con este id identificamos cual tarea es para despues poder borrarla
        id: Date.now(),
    }
    tareas.push(objTarea)
    crear();
    input.value = '';
}

//Creamos las tareas en el DOM y refrescamos el storage

function crear(){
    lista.innerHTML = '';
        tareas.forEach(t => {
            const li = document.createElement("li");
            li.innerHTML = `${t.tarea} <span id="${t.id}">X</span>`
            lista.appendChild(li);
        })
        storage();
}

//Borramos la tarea utilizando el id que les pusimos antes y rehaciendo el DOM

function borrar(e){
    if (e.target.tagName == 'SPAN') {
        const borrar = parseInt(e.target.getAttribute('id'));
        tareas = tareas.filter(t => t.id !== borrar);
        crear();
    }
}

//Mandamos el array de tareas al storage

function storage(){
    localStorage.setItem('tareas', JSON.stringify(tareas));
}