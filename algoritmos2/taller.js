//Cree un programa que declare e inicialice una variable con
//el valor 50, e imprima tal variable cuatro veces.

let numero = 50;
const repeticion = 4;

function printVar(num) {
  for (let i = 0; i < repeticion; i++) {
    console.log("el numero es:" + num);
  }
}
printVar(numero);

/*Cree un programa que pida al usuario el valor de la 
gravedad terrestre en m, guarde tal valor en una constante 
y a continuación imprima un mensaje al usuario 
confirmando el valor de la gravedad introducida*/

const gravedad = prompt("Ingrese la gravedad de la tierra");
const gravity = 9.8;

if (gravity === parseFloat(gravedad)) {
  console.log("es correcta tu respuesta de " + gravity);
} else {
  console.log("No es correcto");
}

/*Cree un programa que pida al usuario su edad, domicilio y 
estado civil, a continuación, confirme al usuario los valores 
introducidos por éste.*/

const edad = prompt("Ingrese su edad");
const domicilio = prompt("Ingrese su domicilio");

console.log("Su edad es de " + edad);
console.log("Su deirecccion e de " + domicilio);

// Solicitar al usuario que ingrese su fecha de nacimiento en el formato YYYY-MM-DD
const fechaNacimiento = prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD):");

// Convertir la fecha ingresada en un objeto Date
const fecha = new Date(fechaNacimiento);

// Obtener el día y el mes del cumpleaños
const dia = fecha.getDate();
const mes = fecha.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por eso sumamos 1

// Mostrar un mensaje al usuario con el día de su cumpleaños
console.log("Tu cumpleaños es el día " + dia + " del mes " + mes + ".");
