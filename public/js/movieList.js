const body = document.querySelector("body");
const h1 = document.querySelector("h1");

let pregunta = prompt("¿Desea modo oscuro? responda si o envie vacio");
if(pregunta.toLowerCase() == "si"){
    body.style.backgroundColor = "#7f7f7f";
    body.classList.add("fondoMovieList");
}
h1.textContent = "LISTADO DE PELÍCULAS";
h1.style.color = "white";
h1.style.backgroundColor = "teal";
h1.style.padding = "20px";
