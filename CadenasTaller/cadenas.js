//1.Dada la cadena “Javascript es un buen lenguaje”:
//a) Leer e imprimir los elementos de índices 3, 6, 8
//b) Recorra la cadena usando ciclo for

const frase = "Javascript es un buen lenguaje";
console.log(frase[3]);
console.log(frase[6]);
console.log(frase[8]);

for (let i = 0; i < frase.length; i++) {
  console.log(frase[i]);
}

/*2.Dada la cadena “Somos SENA”:
c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”
d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . 
Como sugerencia use una variable contadora
 para contar el número de veces que se encuentra la letra “o”.*/

//c)
const frase2 = "Somos SENA";

for (let i = 0; i < frase2.length; i++) {
  if (frase2[i] === "E") {
    console.log("Si esta presente la letra " + frase2[i]);
  }
}

//d)
let contador = 0;

for (let i = 0; i < frase2.length; i++) {
  if (frase2[i] === "o") {
    contador++;
  }
}
console.log("La letra o está presente en la frase " + contador + " veces");

/*3.Dada la cadena “Javascript es genial” 
recorra la cadena usando ciclo for y 
muestre por cuantas palabras está compuesta la cadena. */

const frase3 = "Javascript es genial";
let numPalabrs = 1;

for (let i = 0; i < frase3.length; i++) {
  if (frase3[i] === " ") {
    numPalabrs++;
  }
}

console.log("el numero de palabras es de: " + numPalabrs);
