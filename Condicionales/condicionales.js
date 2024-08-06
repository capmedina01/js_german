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

// ejercicio 2
/*
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
}*/

//ejercicio 3
/*
let lado = parseFloat(prompt('Ingrese el valor del lado del cubo'));
let volumen;
if(lado > 0){
    volumen = lado * lado * lado;
    console.log('El volumen del cubo es: '+ volumen);
    
}else{
    console.log("Ingrese valores mayores que 0");
}*/

//ejercicio 4
/*
let pBruto = parseFloat(prompt('Ingrese el valor del producto'));
let pNeto;
if(pBruto > 0){
    pNeto = pBruto * 0.19 + pBruto
    console.log('El precio total del producto con iva es: '+ pNeto);
    
}else{
    console.log("Ingrese valores mayores que 0");
}*/

//ejercicio 5
/*
let pBruto = parseFloat(prompt('Ingrese el valor del producto'));
let pNeto;
let descuento;
if(pBruto > 0){
    descuento = pBruto * 0.10
    pNeto = pBruto  - descuento  
    console.log('El precio total del producto con descuento es: '+ pNeto);
    
}else{
    console.log("Ingrese valores mayores que 0");
}*/

//ejercicio 6

let pBruto = parseFloat(prompt('Ingrese la cantidad a evaluar'));
let porcentaje = parseFloat(prompt('Ingrese el porcentaje a aplicar'));
let respuesta
if(pBruto > 0 && porcentaje > 0){
    respuesta = (pBruto * porcentaje) / 100
    console.log('El valor del porcentaje: '+ respuesta);
    
}else{
    console.log("Ingrese valores mayores que 0");
}