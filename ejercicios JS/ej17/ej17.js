// Escribir un programa que nos diga si un número dado es primo (no es divisible
//     por ninguno otro número que no sea él mismo o la unidad)
let numero=Number(prompt("Ingrese numero deseado: "))
if (numero%2==0 || numero%3==0 || numero%5==0 || numero%7==0)
{
    console.log("Su numero no es primo")
}
else
{
    console.log("Su numero es primo")
}
