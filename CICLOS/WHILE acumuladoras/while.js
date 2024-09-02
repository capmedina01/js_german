/*
Acumuladoras: Sirven para acumular valores
que aumentan o disminuyen. Por ejemplo
la suma de los datos en un promedio
*/
//Pedir n notas al usuario y mostrar su 
//promedio
const n = parseInt(prompt("Ingrese número de notas"));
//contadora y control del ciclo
let contador = 1;
//acumuladora
let acumuladora = 0;
while (contador <= n) {
    let nota = parseFloat(prompt("Ingrese su nota"));
    acumuladora = acumuladora + nota;
    contador++;
}
   
console.log("Valor acumulado: ", acumuladora);
const promedio = acumuladora / n;
console.log("El promedio es: ", promedio);



