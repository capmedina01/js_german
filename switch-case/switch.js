/*
El switch-case permite
reemplazar un grupo de condicionales
sencillos. Es más legible generalmente
*/
//Crear un programa que pida al usuario su estrato
//si el usuario es de estrato uno,tiene derecho a un 
//descuento del 50%, si es del dos tiene derecho a un
//descuento del 30% y si es del tres tiene derecho a un 
//descuento del 10%, no aplica en cualquier otro estrato

let estrato = parseInt(prompt("Ingrese estrato"));

switch (estrato) {
    case 1:
        console.log("Tiene descuento del 50%");
        break;
    case 2:
        console.log("Tiene descuento del 30%");
        break;
    case 3:
        console.log("Tiene descuento del 10%");
        break;
    default:
        console.log("No aplica");
        break;
}

/*version con condicionales
if (estrato >= 1 && estrato <= 3) {
    if (estrato == 1) {
        console.log("Tiene descuento del 50%");
    }
    if (estrato == 2) {
        console.log("Tiene descuento del 30%");
    }
    if (estrato == 3) {
        console.log("Tiene descuento del 10%");
    }
}else{
    console.log("No aplica");
}
    */


