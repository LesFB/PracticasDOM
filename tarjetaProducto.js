const container = document.getElementById("product-container");
const botonAgregar = document.getElementById("agregarProducto");

let nombreProducto=document.getElementById("nombreProducto");
let descripcionProducto=document.getElementById("descripcionProducto")
let imagenProducto = document.getElementById("imagenProducto");
let precioProducto = document.getElementById("precioProducto1");




//para que cada tarjeta tenga su propio div o contenedor


function agregarProductos(){
let valorInputProducto = nombreProducto.value;
let valorInputDescripcion = descripcionProducto.value;
let valorInputImagen = imagenProducto.value;
let valorInputPrecio = precioProducto.value;
const productCard = document.createElement("div");

productCard.innerHTML = `
    <img src="${valorInputImagen}" alt="Producto">
    <h3>${valorInputProducto}</h3>
    <h4>${valorInputDescripcion}</h2>
    <p>${valorInputPrecio}</p>
    `;

container.appendChild(productCard);
}

botonAgregar.addEventListener("click",agregarProductos);