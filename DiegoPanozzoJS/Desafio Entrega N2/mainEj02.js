/* ** Pre-Entrega N 1 ** */
// Mi proyecto consistira en un ecomerce destinado a libros //

/* 28/07
Hola Diego, cómo estás?

El desafío en general se entiende muy bien, aunque hay un par de cosas a tener en cuenta. Por un lado, nos está faltando el uso de métodos de búsqueda y transformación de arrays (alguno como map, filter, reduce, etc). y por otro lado tenemos que sería un error manejar los datos de los libros en arrays por separado; es decir, con respecto a esto último, deberías tener un array de libros que sean objetos con todas sus propiedades, un libro con clase, stock, con precio, etc, porque no tiene sentido tener datos sueltos en arrays que no tienen relación entre sí, aunque entiendo que es medio como para generarle valores al azar.

Ahí podrías combinar lo de los métodos que te faltan incorporar como para tener ya un array con tus objetos libro ya definidos, que el usuario ingrese el que quiere entre las opciones, buscarlo con algún método, ahí hacerle push al carrito. Pero la gracia de los objetos está ahí, que sean objetos completos con todas sus propiedades en vez de datos sueltos en arrays sin relación.

Aguardo que sumes eso, sobre todo lo de los métodos de array que faltan incorporar al menos 1, así te paso el ótimo de forma directa.

Saludos!
*/



/* simulación de la base de datos con la información de stock y precios del libro */
let tipoPrecioStock = [["Edición de Colección", 5000, 0], ["Edición de Tapa Dura", 2500, 5], ["Edición de Tapa Blanda", 1800, 10], ["Edición de Bolsillo", 1350, 10], ["Edición Digital", 500, -1]];

/* Definición del objeto */
class libro {
    constructor(isbn, titulo, autor) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
    }
}

/* Creación del carrito, será un array de objetos */
let carritoLibros = [];

/* Creación del objeto simulado */
const libro01 = new libro('1405244526', "El nombre del viento", "Patrick Rothfuss");

/* Simulación para relleno del carrito */
const libro02 = new libro('1405244545', "El temor de un hombre sabio", "Patrick Rothfuss");
const libro03 = new libro('1405244598', "Las puertas de piedra", "Patrick Rothfuss");
const libro04 = new libro('1405244158', "El ojo del mundo", "Robert Jordan");
const libro05 = new libro('1405248526', "El dragon renacido", "Robert Jordan");
libro02.tipo = tipoPrecioStock[3][0];
libro02.precio = tipoPrecioStock[3][1];
libro02.iva = libro02.precio * 0.21;
libro02.preciofinal = libro02.precio + libro02.iva;
libro03.tipo = tipoPrecioStock[3][0];
libro03.precio = tipoPrecioStock[3][1];
libro03.iva = libro03.precio * 0.21;
libro03.preciofinal = libro03.precio + libro03.iva;
libro04.tipo = tipoPrecioStock[3][0];
libro04.precio = tipoPrecioStock[3][1];
libro04.iva = libro04.precio * 0.21;
libro04.preciofinal = libro04.precio + libro04.iva;
libro05.tipo = tipoPrecioStock[3][0];
libro05.precio = tipoPrecioStock[3][1];
libro05.iva = libro05.precio * 0.21;
libro05.preciofinal = libro05.precio + libro05.iva;
/* fin del relleno */

/* Elegir Formato */
console.log('N° | Formato de Libro | Precio');
for (let i = 0; i < 5; i++) {
        console.log(i+1 + " | " + tipoPrecioStock[i][0] + " | " + tipoPrecioStock[i][1]);
}
let formato = prompt('Por favor seleccione el número de formato del libro que desea adquirir') - 1;
while (formato < -1 || formato > 4) {
    console.log('Por favor ingrese el número de formato correcto');
    formato = prompt('Por favor seleccione el número de formato del libro que desea adquirir') - 1;
}

/* Chequea que hay stock */
while (tipoPrecioStock[formato][2]==0) {
    formato = prompt('Lo sentimos, el formato deseado se encuentra agotado, por favor seleccione otro formato') - 1;
}

/* Asignación de valores al objeto */
libro01.tipo = tipoPrecioStock[formato][0];
libro01.precio = tipoPrecioStock[formato][1];
libro01.iva = libro01.precio * 0.21;
libro01.precioFinal = libro01.precio + libro01.iva;

/* Funciones del carrito */
function carritoAgregar(objeto) {
    carritoLibros.push(objeto);
    console.log('El producto ha sido cargado a su carrito');
}

function mostrarCarrito() {
    for (let i=0; i < carritoLibros.length; i++) {
        console.log(i+1 + " | " + carritoLibros[i].titulo + " | " + carritoLibros[i].precio);
    }
}

function carritoModificarFormato(libro, formato) {
    mostrarCarrito();
    libro = prompt("por favor seleccione el producto que desee modificar") - 1;
    for (let i = 0; i < 5; i++) {
        console.log(i+1 + " | " + tipoPrecioStock[i][0] + " | " + tipoPrecioStock[i][1]);
    }
    formato = prompt("por favor seleccione el nuevo formato") - 1;
    carritoLibros[libro].tipo = tipoPrecioStock[formato][0];
    carritoLibros[libro].precio = tipoPrecioStock[formato][1];
    carritoLibros[libro].iva = carritoLibros[libro].precio * 0.21;
    carritoLibros[libro].precioFinal = carritoLibros[libro].precio + carritoLibros[libro].iva;
}

function carritoEliminarProducto() {
    mostrarCarrito();
    producto = prompt("por favor seleccione el producto que desee Eliminar") - 1;
    while (producto < 0 || producto > carritoLibros.length) {
        console.log('Por favor ingrese el número de producto correcto');
        producto = prompt("por favor seleccione el producto que desee Eliminar") - 1;
    }
    carritoLibros.splice(producto, 1);
}

/* ingreso al carrito */
carritoAgregar(libro01);

/* simulación */
carritoAgregar(libro02);
carritoAgregar(libro03);
carritoAgregar(libro04);
carritoAgregar(libro05);
/**/

/* para ver mejor */
console.log(" ");

mod = confirm("¿Desea modificar el formato de alguno de los libros de su carrito?");

if (mod != false) {
    carritoModificarFormato();
}

/* para ver mejor */
console.log(" ");
carritoEliminarProducto();

/* para ver mejor */
console.log(" ");
mostrarCarrito();