// Una función que se llame doble, que reciba como parámetro un valor, y
// devuelva el doble del número ingresado como parámetro.

let numero = Number(prompt("Ingrese un numero: "))
function doble(num) {
    num = num * 2
    console.log(`El numero nuevo es ${num}`)
}
doble(numero)
