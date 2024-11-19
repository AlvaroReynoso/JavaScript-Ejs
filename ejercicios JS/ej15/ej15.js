// Escribir un programa que escriba en pantalla los divisores de un número dado
let numero=prompt("Ingrese un numero")
let divisores=[]
for(let i=numero;i>=1;i--)
{
    if(numero%i==0)
    {
        divisores.push(i)
    }
    
}
document.write(`Sus divisores son: ${divisores.join(", ")}`)