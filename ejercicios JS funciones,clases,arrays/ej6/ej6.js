// Una función que se llame cuadrado, que reciba como parámetro un
//  valor, y devuelva el valor del numero ingresado como parámetro
//  elevado al cuadrado.

let numero = Number(prompt("Ingrese el numeor deseado: "))

function cuadrado(num) {
    num = num ** 2
    console.log(`El valor que ingreso al cuadrado da: ${num}`)
}
cuadrado(numero)