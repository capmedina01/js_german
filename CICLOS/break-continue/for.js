/*
Pedir números hasta que el usuario ingrese
el 0
*/
/*
let numero = parseInt(prompt("Ingrese número"));
while (true) {
    numero = parseInt(prompt("Ingrese número"));
    if (numero == 0){
        break;//no usar break en lo posible
    }
}
*/

//mostrar los números del 1 al 10 pero
//exceptuando el 7

for (let index = 1; index <= 10; index++) {
    if (index == 7){
        continue;
    }
    console.log(index);
}






