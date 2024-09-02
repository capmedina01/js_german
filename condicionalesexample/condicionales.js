/*
Cree un programa que pida  la edad
de un usuario y muestre si es mayor de edad
*/
//TODO LO QUE ENTRA POR TECLADO ES UN string
//convertimos a entero o flotante sea el caso
//también se puede convertir flotante con parseFloat
let edad = parseInt(prompt("Ingrese edad"));
let soyMayor = edad >= 18;
//si tenemos un solo condicional se llama condicio
//nal sencillo o simple
if (soyMayor){
    console.log("Ud es mayor de edad");
    //si agregamos else, el condicional se vuelve doble o compuesto
}else{
    console.log("Ud no es mayor de edad");
}

