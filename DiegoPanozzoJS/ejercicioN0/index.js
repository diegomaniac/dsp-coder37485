alert('Juguemos un juego');
let min = parseInt(prompt('Por favor ingresa un número inicial'),10);
let max = parseInt(prompt('Bien, ahora por favor ingresa un número final'),10);
let numero = Math.round(Math.random() * (max - min) + min);
console.log(numero);
let numeroIngresado = parseInt(prompt('Voy a pensar un numero entero entre el ' + min + ' y el ' + max +', adivinalo en menos de 5 oportunidades o todos tus pesos se autodevaluaran (p/d: igual lo van a hacer)'),10);
for (let i = 0; i < 5; i++) {
    while (i != 4) {
        if (numero === numeroIngresado) {
            i++
            alert('Excelente!! y solo te tomo ' + i + ' intentos');
            i = 4;
        } else {
            numeroIngresado = parseInt(prompt('¡NO!, ingresa otro numero'),10);
            i++;
        }
    }
}