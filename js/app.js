console.log("Paso por contact form");

// Cual es la diferencia entre let var y const?
// entre let y var en 1 mismo archivo no hay diferencia.
// const es constante una vez definido no se puede cambiar.

const PI = 3.141592653589793; // Tambien se podria Maht.PI

// Llamo 10 veces una funcion
//for (let i = 0; i < 10; i++) {
checkAge(1, alert); //  <- Check age hace todo...
//}
console.log(Math.pow(2,6))
console.log(pow(2,6))

let myValue = pow(2,6) // pow return un valor que es 2 elevado a la 6

console.log(myPow(2,6));

let myInputNumber = parseInt(prompt("Ingrese un Numero"));

console.log(Math.floor(myInputNumber / 2)); // Convierte a IEEE 754 y luego toma la parte entera

console.log(myInputNumber >> 1); // Divido por dos y me quedo con el entero

console.log(myInputNumber << 1); // Multiplicar por dos 

////////////////////////////
//  Como es el 15 en binario?
//  1111 en binario
// Si lo divido / 2 esto se convierte a decimal...

// 7 en binario es 0111

// Si divido 15 / 2 ... es 7 + 1 de resto...

console.log("El resto es: " + myInputNumber % 2);

let esPar = ((myInputNumber % 2) == 0) ? true : false;

if (esPar) {
    alert("El numero elegido es Par");
}


let myMonthInput = parseInt(prompt("Ingrese el mes usando numeros del 1 al 12"));

// Es muy bueno para recorrer elementos o listas
//for (let index = 0; index < array.length; index++) {
//    const element = array[index];

//}


do {
    switch (myMonthInput) {
        case 12:
        case 1:
        case 2:
            alert("Este es un mes de Verano");
            break;
        case 3:
        case 4:
        case 5:
            alert("Este es un mes de Otoño");
            break;
        case 6:
        case 7:
        case 8:
            alert("Este es un mes de Invierno");
            break;
        case 9:
        case 10:
        case 11:
            alert("Este es un mes de Primavera");
            break;
        default:
            alert("N/A");
            break;
    }

    //let myMonthInput = parseInt(prompt("Ingrese el mes usando numeros del 1 al 12"));
   
} while ((myMonthInput != 12)) // Como hago para combinar estos meses??  (myMonthInput!=1) (myMonthInput!=2));

