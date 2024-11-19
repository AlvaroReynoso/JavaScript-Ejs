// Una función que se denomine imprimirValores que dado un número
//  por parámetro, imprima cual es el valor siguiente, el doble y el
//  cuadrado. Usando las funciones definidas en los puntos 5) , 6) y 7) :
//  siguiente, el doble y el cuadrado

let numero = Number(prompt("Ingrese un numero: "))
function doble(num) {
    num = num * 2
    console.log(`El doble del numero es: ${num}`)
}
function siguiente(num)
{
    num=num+1
    console.log(`El numero siguiente es: ${num}`)

}
function cuadrado(num)
{
    num= num**2
    console.log(`El numero al cudrado da: ${num}`)

}
doble(numero)
siguiente(numero)
cuadrado(numero)