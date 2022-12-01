const body = document.querySelector("body");
const h1 = document.querySelector("h1");

let pregunta = prompt("¿Desea cambiar fondo? escriba 1, 2 o 3");
if(pregunta == "1"){
    body.style.background = "url('../img/american-sniper-poster.jpg')";
}
else if(pregunta == "2"){
    body.style.background = "url('../img/vikingsposter.jpg')";
}
else if(pregunta == "3"){
    body.style.background = "url('../img/flash.jpg')";
}
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";
h1.textContent = "Editando PELICULA";
h1.style.color = "BLUE";

h1.style.padding = "20px";
h1.style.textAlign = "center";
