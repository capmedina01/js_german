//ejercicio 1 seccion 2
/*  
let base = parseFloat(prompt("Ingrese la base del triangulo"))
let altura = parseFloat(prompt("Ingrese la altura del triangulo"))
let area
if(base >0 && altura > 0){
    area = (base * altura)/ 2
    console.log("el area del triangulo es: " + area);
}else{
    console.log("Ingrese valores mayores que 0");
}*/

let radio = parseFloat(prompt("Ingrese el valor del radio del circulo"))
let perimetro
let area
const pi = 3.1416
if( radio > 0){
    perimetro = (2 * pi) * radio
    area = (radio *radio) * pi
    console.log("el perimetro del circulo es: " + perimetro);
    console.log("el área del circulo es: " + area);
}else{
    console.log("Ingrese valores mayores que 0");
}