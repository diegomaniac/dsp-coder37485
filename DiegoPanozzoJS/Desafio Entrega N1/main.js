/* ** Desafio N 1 ** */
// Mi proyecto consistira en un ecomerce destinado a libros //
/* En este caso simulare la operatoria de compra de un libro que sumara 
impuestos y cambiara el precio dependiendo de la variante del libro (tapa dura, blanda, bolsillo, digital) */

class libro {
    constructor(isbn, titulo, autor) {
        this.isbn = isbn;
        this.autor = autor;
        this.titulo = titulo;
        this.precio = 0;
        this.pFinal = 0;
    }
    calcIVA () {this.pFinal = this.precio * 1.21;}
}

const libro1 = new libro("978-980-14-2517-5", "El nombre del viento", "Patrick Rothfuss");

let tipoLibro = 0;

while (tipoLibro != 1 || tipoLibro != 2 || tipoLibro != 3 || tipoLibro != 4 ) {
    tipoLibro = prompt("Por favor Seleccione el tipo de Libro que desea adquirir (ingrsando el numero correspondiente): 1 - Tapa Dura || 2 - Tapa Blanda || 3 - Edición de Bolsillo || 4 - Edición Digital ");
    if (tipoLibro == 1 || tipoLibro == 2 || tipoLibro == 3 || tipoLibro == 4 ) {
        alert ("Muchas Gracias. El tipo de libro ingresado es: " + tipoLibro);
        break;
    } else {
        alert ("Por Favor ingrese un Numero comprendido entre 1 hasta 4");
    }
}

switch (tipoLibro) {
    case '1':
        libro1.precio = 3000;
        alert ("El precio del libro seleccionado es: $" + libro1.precio);
        break;
    case '2':
        libro1.precio = 2000;
        alert ("El precio del libro seleccionado es: $" + libro1.precio);
        break;
    case '3':
        libro1.precio = 1000;
        alert ("El precio del libro seleccionado es: $" + libro1.precio);
        break;
    case '4':
        libro1.precio = 250;
        alert ("El precio del libro seleccionado es: $" + libro1.precio);   
        break;
}

libro1.calcIVA ();
alert ("Los impuestos del libro seleccionado son: $" + libro1.precio*0.21);
alert ("El Precio Final del libro seleccionado es: $" + libro1.pFinal);
