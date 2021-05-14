const EDAD_MINIMA = 18;

// Declaramos una funcion podria definir repeat=1 como valor default
function checkAge(repeat=1, myCallback = null) {
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
            //alert("Bienvenido!");
            // Si es mayor de edad Y tengo definido un callback... se llama
            if( myCallback != null){
                myCallback("Bienvenido Usuario");
            }
        }
    }

    
}


/**
 * calculateForce F = m.a -> Calcular de fuerza en distintos tipos de unidades.
 * @param {*} m 
 * @param {*} a 
 * @param {*} unit 
 * @returns 
 */
function calculateForce( m, a, unit) {
    let f = 0;
    switch (unit) {
        case 'Newtons':
            f = m * a;
            break;
        
        case 'other unit':
            
            break;
        default:
            break;
    }

    return f;
}

// function para convertir unidades de temperatura
// Kelvin, celcius, fahrenheit
function convertTemp(from, to){
    //
}

/**
 * Pow is a funciont multiples x by y times
 * @param { Number } x 
 * @param { Number} y 
 * @returns { Number }
 */
function pow(x,y) {
    let value = x ** y; // primero operadores
    return value; // luego retorno el valor
}

let myPow = (x, y) => x ** y;

