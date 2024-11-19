// Crear una función que se llame promedio3, que reciba como
// parámetro tres valores y devuelva el promedio de los mismos.
let numero1=Number(prompt("Ingrese numero 1:"))
let numero2=Number(prompt("Ingrese numero 2:"))
let numero3=Number(prompt("Ingrese numero 3:"))

function promedio3(n1,n2,n3)
{
    console.log(`El promedio de los valores es: ${(n1+n2+n3)/3}`)
    return 0;
}

promedio3(numero1,numero2,numero3)
