/* ** Segunda Entregal del Proyecto Final 09/08 ** */
// Mi proyecto consistira en un ecomerce destinado a libros //

/* Definición del objeto */
class libro {
    constructor(isbn, titulo, autor, stockColeccion, precioColeccion, stockTDura, precioTDura, stockTBlanda, precioTBlanda, stockBolsillo, precioBolsillo, precioDigital) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.formatosStocskPrecios = [["Colección", stockColeccion, precioColeccion], ["Tapa Dura", stockTDura, precioTDura], ["Tapa Blanda", stockTBlanda, precioTBlanda], ["Bolsillo", stockBolsillo, precioTBlanda], ["Digital", -1, precioDigital]];
    }
}

/* Creación del carrito y/o su obtencion del localStorage segun corresponda */
let carritoLibros = JSON.parse(localStorage.getItem("carrito")) ?? {items: 0, total: 0, particulares:[]};
let carritoID = carritoLibros.particulares.length ?? -1;
document.getElementById("tbCarritoCompras").innerHTML = carritoLibros.items + " - $ " + carritoLibros.total;
if (carritoID != -1) {
    for (let i= 0; i < carritoID; i++) {
        document.getElementById("contenidoCarrito").innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-start" id="${carritoLibros.particulares[i][0]}">
        <div class="ms-2 me-auto">
            <div class="fw-bold">${carritoLibros.particulares[i][2]}</div>
            ${carritoLibros.particulares[i][3]} - $ ${carritoLibros.particulares[i][4]}.-
        </div>
        <span class="badge bg-primary rounded-pill" id="${'pre'+carritoLibros.particulares[i][0]}">
            <a id="${'del'+carritoLibros.particulares[i][0]}" onclick='eliminarDelCarrito("${carritoLibros.particulares[i][0]}")'>x</a>
        </span>
        </li>
        `;
    }
}

/* Creación de los objetos simulados del back */
const libro01 = new libro('00001', "El nombre del viento", "Patrick Rothfuss", 0, 5000, 5, 2500, 10, 2000, 12, 1350, 500);
const libro02 = new libro('00002', "El temor de un hombre sabio", "Patrick Rothfuss",  2, 5000, 3, 2500, 8, 2000, 10, 1350, 500);
const libro03 = new libro('00003', "La Música del Silencio ", "Patrick Rothfuss",  3, 5000, 2, 2500, 6, 2000, 5, 1350, 500);

let cards = "";
let catalogo = [libro01, libro02, libro03];

/* Modificación del Dom| Creación de las cards con los libros */
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
                    <button id="${card.isbn + card.formatosStocskPrecios[0][0]}" onclick='agregarAlCarrito("${card.isbn}", "${card.titulo}", "${card.formatosStocskPrecios[0][0]}", "${card.formatosStocskPrecios[0][2]}")' data-id="${card.isbn + card.formatosStocskPrecios[0][0]}"> ${card.formatosStocskPrecios[0][0]} - $ ${card.formatosStocskPrecios[0][2]} </button><br>
                    <button id="${card.isbn + card.formatosStocskPrecios[1][0]}" onclick='agregarAlCarrito("${card.isbn}", "${card.titulo}", "${card.formatosStocskPrecios[1][0]}", "${card.formatosStocskPrecios[1][2]}")' data-id="${card.isbn + card.formatosStocskPrecios[1][0]}">${card.formatosStocskPrecios[1][0]} - $ ${card.formatosStocskPrecios[1][2]} </button><br>
                    <button id="${card.isbn + card.formatosStocskPrecios[2][0]}" onclick='agregarAlCarrito("${card.isbn}", "${card.titulo}", "${card.formatosStocskPrecios[2][0]}", "${card.formatosStocskPrecios[2][2]}")' data-id="${card.isbn + card.formatosStocskPrecios[2][0]}">${card.formatosStocskPrecios[2][0]} - $ ${card.formatosStocskPrecios[2][2]} </button><br>
                    <button id="${card.isbn + card.formatosStocskPrecios[3][0]}" onclick='agregarAlCarrito("${card.isbn}", "${card.titulo}", "${card.formatosStocskPrecios[3][0]}", "${card.formatosStocskPrecios[3][2]}")' data-id="${card.isbn + card.formatosStocskPrecios[3][0]}">${card.formatosStocskPrecios[3][0]} - $ ${card.formatosStocskPrecios[3][2]} </button><br>
                    <button id="${card.isbn + card.formatosStocskPrecios[4][0]}" onclick='agregarAlCarrito("${card.isbn}", "${card.titulo}", "${card.formatosStocskPrecios[4][0]}", "${card.formatosStocskPrecios[4][2]}")' data-id="${card.isbn + card.formatosStocskPrecios[4][0]}">${card.formatosStocskPrecios[4][0]} - $ ${card.formatosStocskPrecios[4][2]} </button>
                    </div>
                </div>
            </div>
        </div>
        `
})

document.getElementById("seccionCards").innerHTML = `
<div class="container px-4 px-lg-5 mt-5">
<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">` + cards + `
</div></div>`;

/* Función con numeros aleatorios */
function generarAleatorio(maxLimit) {
    let rand = Math.floor(Math.random() * maxLimit);
    return rand;
}

/* Fetch con Api de Frases */
fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let i = generarAleatorio(data.length-1);
        document.getElementById("frase").innerHTML = `"${data[i].text}" - ${data[i].author}`;
    });

/* Funciones para agregar y quitar elementos del carrito, modificando Dom y guardando cambios en el localStorage */
function agregarAlCarrito (isbn, titulo, formato, precio) {
    carritoLibros.items += 1;
    carritoID += 1;
    carritoLibros.total += parseInt(precio);
    document.getElementById("tbCarritoCompras").innerHTML = carritoLibros.items + " - $ " + carritoLibros.total;
    carritoLibros.particulares.push([carritoID, isbn, titulo, formato, precio]);
    document.getElementById("contenidoCarrito").innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-start" id="${carritoID}">
    <div class="ms-2 me-auto">
        <div class="fw-bold">${titulo}</div>
        ${formato} - $ ${precio}.-
    </div>
    <span class="badge bg-primary rounded-pill" id="${'pre'+carritoID}">
        <a id="${'del'+carritoID}" onclick='eliminarDelCarrito("${carritoID}")'>x</a>
    </span>
    </li>
    `;
    localStorage.setItem("carrito", JSON.stringify(carritoLibros));
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: "Has agregado "+ carritoLibros.particulares[carritoID-1][2] +" en formato "+ carritoLibros.particulares[carritoID-1][3] +" a tu carrito."
    })
}

function eliminarDelCarrito(carritoID) {
    document.getElementById(carritoID).remove();
    for (let i = 0; i < carritoLibros.particulares.length; i++) {
        carritoLibros.particulares[i][0] == carritoID ? (
            carritoLibros.items -= 1,
            carritoLibros.total -= parseInt(carritoLibros.particulares[i][4]),
            carritoLibros.particulares.splice(i, 1),
            document.getElementById("tbCarritoCompras").innerHTML = carritoLibros.items + " - $ " + carritoLibros.total,
            localStorage.setItem("carrito", JSON.stringify(carritoLibros)))
        : 
        console.log("este mensaje no debe verse, solo lo pongo para usar el operador ternario porque no tengo un uso real en el codigo");
}}        

function vaciarCarrito() {
    document.getElementById("contenidoCarrito").innerHTML = "";
    for (let i = 0; i < carritoLibros.particulares.length; i++) {
        carritoLibros.items = 0;
        carritoLibros.total = 0;
        carritoLibros.particulares = [];
        document.getElementById("tbCarritoCompras").innerHTML = carritoLibros.items + " - $ " + carritoLibros.total;
        localStorage.setItem("carrito", JSON.stringify(carritoLibros));
    }
}

document.getElementById("continuarCompra").addEventListener("click", function() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'Continuar al pago',
        text: "Estamos direccionando tu compra para su pago.",
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
            '¡Muchas gracias por elegirnos!',
            'Estamos direccionando tu compra para su pago',
            'success'
        )
        vaciarCarrito()
    }}
,false)})