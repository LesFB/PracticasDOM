var parrafo = document.getElementById("parrafo");

parrafo.style.color="blue";
parrafo.innerHTML = "Holisss"

var parr = document.getElementsByClassName("parrafos");

//parr.style.color = "blue";

var parrafotsEtiqueta = document.getElementsByTagName("p");
console.log()

function cambiaColor(color){
    parrafo.style.color = color
}

const botonCambiarColor = document.querySelector("#botonCambiarColor");

botonCambiarColor.addEventListener("click", function(){
    alert("hola!!!!")
});


const div = document.createElement("div");

document.body.appendChild(div);

var appendImg = document.createElement("img");
appendImg.src = "https://cdns-images.dzcdn.net/images/artist/098ea0886f463cf48b75d2af855ad3b9/500x500.jpg";
appendImg.alt="los teme"

document.body.appendChild(appendImg);