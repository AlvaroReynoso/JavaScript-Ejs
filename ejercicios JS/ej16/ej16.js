// Escribir un programa que escriba en pantalla los divisores comunes de dos
// números dados
let numero1=prompt("Ingrese su primer numero: ")
let numero2=prompt("Ingrese su segundo numero: ")
let divisores1=[]
let divisores2=[]

for(let i=numero1;i>=1;i--)
{
    if(numero1%i==0)
    {
        divisores1.push(i)
    }
}
for(let i=numero2;i>=1;i--)
{
    if(numero2%i==0)
    {
        divisores2.push(i)
    }
}
document.write(`Los divisores del numero 1 son: ${divisores1.join(", ")} <br>`)
document.write(`Los divisores del numero 2 son: ${divisores2.join(", ")}`)

// y los comunes de los 2
// let num1 = Number(prompt("ingrese el primer numero"));
// let num2 = Number(prompt("ingrese el segundo numero"));
// for (let i = 1; i < 10; i++) {
//     if (num1 % i == 0 && num2 % i == 0) {
//         document.write("Los numeros son divisible por: ",i);
//         document.write("<br>");
//     }
// }

