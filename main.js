// var a = 1
// var b = 2

// // if (false) {
// //    console.log("esto no se va a imprimir")
// // }

// // if (true) {
// //    console.log ("esto si se va a imprimir")
// // }

// if (a > b) {
//    console.log ("a efectivamente es mayor que b, esto es falso y nunca se va a ejecutar!")
// }

// if (a < b) {
//    console.log("a es menor que b")
// }

// if (1 == 1) {
//    console.log("1 es igual a 1")
// }

// if (1 <= 1) {
//    console.log("")
// }

// /**
//  * menor que < // 1 < 4
//  * mayor que > // 4 > 2
//  * menor o igual que <= // 1 <= 4
//  * mayor o igual que >= // 4 >= 2
//  * igual (o semejante) == // "1" == 1 // true
//  * exactamente igual === // "1" ==== 1 // false
//  * distinto != // 1 != "hola!" // true
//  * MUY distinto !== // "1" !== 1 // true
//  */

// var edad = 17

// if (edad >= 18) {
//    alert("Puedes pasar, eres lo suficientemente grande")
// } 
// else {
//    alert("Eres muy joven, te vas a disney.com")
// }

/**
 * Construir una aplicacion que le pida el nombre y edad al usuario. Luego debe pedir cuantos años le gustaria tener.
 * El programa debe indicarle al usuario cuantos años tienen que pasar o en cuanto tiene que rejuvenecer
 */

var nombre = prompt ("Hola, usuario. Cual es tu nombre?")
var edad = prompt ("Buena, " + nombre + "! Cual es tu edad?")
var edadDeseada = prompt ("Ahora, " + nombre + ". Cual es tu edad ideal?")

if (edadDeseada < edad) {
   anos = Number(edad)-Number(edadDeseada)
   alert("Tendrias que retroceder el tiempo " + anos + " años para volver a tu edad ideal!")
}
else {
   anos = Number(edadDeseada)-Number(edad)
   alert("Te faltan " + anos + " años para alcanzar tu edad ideal!")
}