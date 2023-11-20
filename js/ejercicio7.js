/**
 * Implementa la serie de Fibonacci
 * @param {*} n: número de elementos de la serie.
 * @returns vector con la serie de Fibonacci.
 * @author: Sustituye tu nombre y apellidos aquí
 */
function fibonacci(n)
{
    let vector=new Array(); // Creamos un vector para alamcenar el cálculo
    
    
    // ESCRIBE TU CÓDIGO AQUÍ
    if (n <= 0) {
        return vector; // Si n es no positivo, retornamos un vector vacío
    } else if (n === 1) {
        vector.push(0); // Si n es 1, la serie es [0]
        return vector;
    } else if (n === 2) {
        vector.push(0, 1); // Si n es 2, la serie es [0, 1]
        return vector;
    }

    vector.push(0, 1); // Inicializamos el vector con los dos primeros elementos de la serie

    for (let i = 2; i < n; i++) {
        // Calculamos los siguientes elementos de la serie
        let siguienteElemento = vector[i - 1] + vector[i - 2];
        vector.push(siguienteElemento);
    }
    
    return vector; // Retorno de la función
}

/**
 * Aplicación principal Ejercicio 7
 * @author: José Gaspar Sánchez García
 */
function appMain()
{
    const salidaHTML=document.getElementById("salida");
    let x=parseInt(prompt("Indique el número de elementos de la serie de Fibonacci: "));
    let v=fibonacci(x);

    console.log(`Fibonacci(${x}) = [ ${v} ]`);
    // alert("Fibonacci: "+v);
    salidaHTML.innerHTML="Fibonacci("+x+") = ["+v+"].";
}

// Exportamos la funcion fibonacci para poder realizar el Testing
module.exports={
    fibonacci,
};