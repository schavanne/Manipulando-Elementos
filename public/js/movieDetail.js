const body = document.querySelector("body");
const h1 = document.querySelector("h1");

let pregunta = prompt("¿Desea modo oscuro? responda si o envie vacio");
if(pregunta.toLowerCase() == "si"){
    body.style.backgroundColor = "#f4fabf";
}
let nombre_pelicula = prompt("Nombre de la pelicula que quiere ver");
if(nombre_pelicula){
    h1.textContent = nombre_pelicula;
}
h1.style.color = "black";
h1.style.backgroundColor = "white";
h1.style.textDecoration = "underline";
h1.style.padding = "15px";
