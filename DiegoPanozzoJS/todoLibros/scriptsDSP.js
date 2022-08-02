/* ** Desafio 02/08/22 ** */
// Mi proyecto consistira en un ecomerce destinado a libros //

/* Definición del objeto */
class libro {
    constructor(isbn, titulo, autor, stockColeccion, precioColeccion, stockTDura, precioTDura, stockTBlanda, precioTBlanda, stockBolsillo, precioBolsillo, precioDigital) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.formatosStocskPrecios = [["Colección", stockColeccion, precioColeccion], ["TapaDura", stockTDura, precioTDura], ["TapaBlanda", stockTBlanda, precioTBlanda], ["Bolsillo", stockBolsillo, precioTBlanda], ["Digital", -1, precioDigital]];
    }
}

/* Creación del carrito, será un array de objetos */
let carritoLibros = {items: 0, total: 0, particulares:[]};

/* Creación de los objetos simulados */
const libro01 = new libro('00001', "El nombre del viento", "Patrick Rothfuss", 0, 5000, 5, 2500, 10, 2000, 12, 1350, 500);
const libro02 = new libro('00002', "El temor de un hombre sabio", "Patrick Rothfuss",  2, 5000, 3, 2500, 8, 2000, 10, 1350, 500);
const libro03 = new libro('00003', "La Música del Silencio ", "Patrick Rothfuss",  3, 5000, 2, 2500, 6, 2000, 5, 1350, 500);

let cards = "";
let catalogo = [libro01, libro02, libro03];

document.getElementById("seccionCards").innerHTML = `
<div class="container px-4 px-lg-5 mt-5">
<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">`;

catalogo.forEach((card) => {
    cards += `
        <div class="col mb-5">
            <div class="card h-100">
                <!-- Product image -->
                <img class="card-img-top" src="img/${card.isbn}.png" alt="..." />
                <!-- Product details -->
                <div class="card-body p-4">
                    <div class="text-center">
                    <!-- Product name -->
                    <h5 class="fw-bolder">${card.autor} - ${card.titulo}</h5>
                    <!-- Product price -->
                    <button id="${card.isbn + card.formatosStocskPrecios[0][0]}" onclick='agregarAlCarrito("${card.titulo}", "${card.formatosStocskPrecios[0][0]}", "${card.formatosStocskPrecios[0][2]}")' data-id="${card.isbn + card.formatosStocskPrecios[0][0]}"> ${card.formatosStocskPrecios[0][0]} - $ ${card.formatosStocskPrecios[0][2]} </button><br>
                    <button id="${card.isbn + card.formatosStocskPrecios[1][0]}" onclick='agregarAlCarrito("${card.titulo}", "${card.formatosStocskPrecios[1][0]}", "${card.formatosStocskPrecios[1][2]}")' data-id="${card.isbn + card.formatosStocskPrecios[1][0]}">${card.formatosStocskPrecios[1][0]} - $ ${card.formatosStocskPrecios[1][2]} </button><br>
                    <button id="${card.isbn + card.formatosStocskPrecios[2][0]}" onclick='agregarAlCarrito("${card.titulo}", "${card.formatosStocskPrecios[2][0]}", "${card.formatosStocskPrecios[2][2]}")' data-id="${card.isbn + card.formatosStocskPrecios[2][0]}">${card.formatosStocskPrecios[2][0]} - $ ${card.formatosStocskPrecios[2][2]} </button><br>
                    <button id="${card.isbn + card.formatosStocskPrecios[3][0]}" onclick='agregarAlCarrito("${card.titulo}", "${card.formatosStocskPrecios[3][0]}", "${card.formatosStocskPrecios[3][2]}")' data-id="${card.isbn + card.formatosStocskPrecios[3][0]}">${card.formatosStocskPrecios[3][0]} - $ ${card.formatosStocskPrecios[3][2]} </button><br>
                    <button id="${card.isbn + card.formatosStocskPrecios[4][0]}" onclick='agregarAlCarrito("${card.titulo}", "${card.formatosStocskPrecios[4][0]}", "${card.formatosStocskPrecios[4][2]}")' data-id="${card.isbn + card.formatosStocskPrecios[4][0]}">${card.formatosStocskPrecios[4][0]} - $ ${card.formatosStocskPrecios[4][2]} </button>
                    </div>
                </div>
            </div>
        </div>
        `
})

console.log(carritoLibros);
document.getElementById("seccionCards").innerHTML = `
<div class="container px-4 px-lg-5 mt-5">
<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">` + cards + `
</div></div>`;

function agregarAlCarrito (titulo, formato, precio) {
    carritoLibros.items += 1;
    carritoLibros.total += parseInt(precio);
    document.getElementById("tbCarritoCompras").innerHTML = carritoLibros.items + " - $ " + carritoLibros.total;
    carritoLibros.particulares.push([titulo, formato, precio]);
    document.getElementById("contenidoCarrito").innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
        <div class="fw-bold">${titulo}</div>
        ${formato} - $ ${precio}.-
    </div>
    <span class="badge bg-primary rounded-pill">X</span>
    </li>
    `;
}