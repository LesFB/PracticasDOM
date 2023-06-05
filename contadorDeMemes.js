let numContador = document.getElementById("numContador");
let botonIncremento = document.getElementById("butonIncrementar");
let botonDecremento = document.querySelector("#butonDecrementar");
let botonResetear= document.querySelector("#butonResetear");
let memeRandom= document.querySelector("#memeRandom");


var valorContador = 0;

function incrementar(){
    valorContador++;
    numContador.innerHTML = valorContador;

    if(valorContador%10==0){
        mostrarImagen();
    }
}

function decrementar(){
    valorContador--
    numContador.innerHTML = valorContador

    if(valorContador%10==0){
        mostrarImagen();
    }
}

function resetear(){
    valorContador =0
}

function mostrarImagen(){
    var colImagenes =["meme1.png","meme2.png","meme3.png","meme4.png"];

    let indexRandom= Math.floor(Math.random()*colImagenes.length);

    let urlAleatoria = colImagenes[indexRandom];

    memeRandom.src = "./assets/"+ urlAleatoria;

    memeRandom.style.display = "block";
}

botonIncremento.addEventListener("click",incrementar);
botonDecremento.addEventListener("click",decrementar);
botonResetear.addEventListener("click",resetear);



/*for(let i=0;i<11;i++){
    incrementar()
}
/*
for(let i=0;i<26;i++){
    decrementar()
}

resetear();

for(let i=0;i<15;i++){
    incrementar()
}*/
/*
function decrementar()

function resetear()

function mostrarImagen()*/