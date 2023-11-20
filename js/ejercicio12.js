/**
 * Ejercicio 12. Calculadora JavaScript
 * Autor: Marouane Saidi Rahim
 */

/**
 * Implementa el Menú 1: Sumar
 * @author: Marouane Saidi Rahim
 * @return suma
 */
function menu1() {
    // Implemente la opción de la calculadora que permite sumar.
    console.info("Suma:");
    let sumando1=parseInt(prompt("Introduzca el prmier sumando: ",0));
    let sumando2=parseInt(prompt("Introduzca el segundo sumando: ",0));
    let resultado=sumando1+sumando2;
    console.log("El resultado de la suma "+sumando1+" + "+sumando2+" es "+resultado);
    return resultado;
}

/**
 * Implementa el Menú 2: Restar
 * @author: Marouane Saidi Rahim
 * @return resta
 */
function menu2() {
    // Implemente la opción de la calculadora que permite restar.
    console.info("Resta:");
    
    // IMPLEMENTA TU CÓDIGO AQUÍ
    let minuendo=parseInt(prompt("Introduzca el minuendo: ",0));
    let sustraendo=parseInt(prompt("Introduzca el sustraendo: ",0));
    let resultado=minuendo-sustraendo;
    console.log("El resultado de la resta "+minuendo+" - "+sustraendo+" es "+resultado);
    return resultado;
}
/**
 * Implementa el Menú 3: Multiplicar
 * @author: Marouane Saidi Rahim
 * @return multiplicación
 */
function menu3() {
    // Implemente la opción de la calculadora que permite multiplicar.
    console.info("Multiplica:");
    
    // IMPLEMENTA TU CODIGO AQUÍ 
    let m1=parseInt(prompt("Introduzca el minuendo: ",0));
    let m2=parseInt(prompt("Introduzca el sustraendo: ",0));
    let resultado=m1*m2;
    console.log("El resultado de la multiplicación "+m1+" * "+m2+" es "+resultado);
    return resultado;
}

/**
 * Implementa el Menú 4: Dividir
 * @author: Marouane Saidi Rahim
 * @return división
 */
function menu4() {
    // Implemente la opción de la calculadora que permite dividir.
    console.info("Divide:");
    
    // IMPLEMENTA TU CÓDIGO AQUÍ
    let d1=parseInt(prompt("Introduzca el minuendo: ",0));
    let d2=parseInt(prompt("Introduzca el sustraendo: ",0));
    let resultado=d1/d2;
    console.log("El resultado de la división "+d1+" / "+d2+" es "+resultado);
    return resultado;

}

/**
 * Menú Aplicación Calculadora
 * @author: Marouane Saidi Rahim
 */
function appMenu() {
    let opcion=-1;
    let resultado=0;
    do{
        console.log("\n*** CALCULADORA ***\n");
        console.log("Menú:");
        console.log("1. Sumar");
        console.log("2. Restar");
        console.log("3. Multiplicar");
        console.log("4. Dividir");
        console.log("0. Salir");
        opcion=parseInt(prompt("Introduzca opción: "));

        switch(opcion){
            case 1:
                resultado = menu1();
                console.log("El resultado de la Suma es: " +resultado);
                break;
            case 2:
                resultado = menu2();
                console.log("El resultado de la Resta es: " +resultado);
                break;
            case 3:
                resultado = menu3();
                console.log("El resultado de la Multiplicación es: " +resultado);
                break;
            case 4:
                resultado = menu4();
                console.log("El resultado de la División es: " +resultado);
                break;
            case 0:
                console.info("Saliendo aplicación calculadora.");
                break;
            default:
                console.error("Error: Opción "+opcion+" incorrecta.");
                break;
        }

    }while(opcion!=0)
    console.log("El resultado de la operacion es: " +resultado)
}
appMenu();