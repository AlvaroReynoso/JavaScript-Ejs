// Diseñar una función que tenga como parámetros dos números, y que
// calcule el máximo
let numero1=Number(prompt("Ingrese numero 1:"))
let numero2=Number(prompt("Ingrese numero 2:"))
function max(num1,num2)
{
    if(num1>num2)
    {
        console.log(`El ${num1} es mayor que ${num2}`)
    }
    else
    {
        console.log(`El ${num2} es mayor que ${num1}`)  
    }
}
max(numero1,numero2)
