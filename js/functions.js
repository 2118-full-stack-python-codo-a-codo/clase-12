const EDAD_MINIMA = 18;

// Declaramos una funcion podria definir repeat=1 como valor default
function checkAge(repeat) {
    if( repeat == undefined) {
        console.error("Parametro no definido");
    }

    for (let index = 0; index < repeat; index++) {

        // Por ahora todo tipo de dato ingresa por prompt
        let myEdad = parseInt(prompt("Que edad tenes?"));

        let tieneEdadMinima = (myEdad >= EDAD_MINIMA); // Uso el operador > para comparar numeros
        //let myValorFalse = false;

        if (!tieneEdadMinima) { // if ( condition ) si la condicion es verdadera pasa sino no.
            alert("Sos Menor, no podes ingresar");
            document.location = "../index.html"; // Te vas al index.html
        } else {
            alert("Bienvenido!");
        }
    }

}
