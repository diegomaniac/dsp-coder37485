/* ** Pre-Entrega N 1 ** */
// Mi proyecto consistira en un ecomerce destinado a libros //

/*  */

/* Simulación de datos tomados de la DB */
const libroClase = ['Colección', 'Tapa Dura', 'Tapa Blanda', 'Bolsillo', 'Digital'];
const libroClaseStock = [0, 6, 10, 20, -1];
let libroClasePrecio = [5000, 2500, 1800, 1500, 500];
let carritoLibros = [];

/* Definición del objeto */
class libro {
    constructor(isbn, titulo, autor) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.clase = -1;
        this.stock = 0;
        this.precio = 0;
        this.iva = 0;
    }
}

/* Creación del objeto simulado */
const libro01 = new libro('1405244526', "El temor de un hombre sabio", "Patrick Rothfuss");

/* Simulación de interación Usuario - Carrito de Compras (cargado con el libro) */
/* Elegir Formato */
console.log('N° | Formato de Libro | Precio');
for (let i = 0; i < 5; i++) {
    console.log([i+1] + ' | ' + libroClase[i] + ' | $' + libroClasePrecio[i]);
}
let formato = prompt('Por favor seleccione el número de formato del libro que desea adquirir') - 1;

while (formato < -1 || formato > 4) {
    console.log('Por favor ingrese el número de formato correcto');
    formato = prompt('Por favor seleccione el número de formato del libro que desea adquirir') - 1;
}

while (formato != 4 && libroClaseStock[formato] == 0) {
    formato = prompt('Lo sentimos, el formato deseado se encuentra agotado, por favor seleccione otro formato') - 1;
}

/* asignación de valores al objeto */
libro01.clase = libroClase[formato];
libro01.stock = libroClaseStock[formato];
libro01.precio = libroClasePrecio[formato];
libro01.iva = libro01.precio * 0.21;

/* ingreso al carrito */
function carritoAgregar(libro) {
    libro.stock = libro.stock - 1;
    console.log('El producto ha sido cargado a su carrito');
    carritoLibros.push(libro01);
}

carritoAgregar(libro01);
alert('Su carrito contiene los siguientes productos: ' + carritoLibros[0].autor + ' - ' + carritoLibros[0].titulo + ' | Formato : ' + carritoLibros[0].clase + ' con un precio de $' +  (carritoLibros[0].precio + carritoLibros[0].iva));
