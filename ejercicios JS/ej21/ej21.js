// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
// número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
// // deberá indicarse la suma total de los números introducidos.
let numero
let contador=0
do
{
    numero=prompt("Ingrese los numeros que desee: ")
    if(numero!=null)
    {
        numero=Number(numero)
    }
    if (numero==NaN)
    {
        alert("No es un numero, siga ingresando numeros")
    }
    else if(numero){
        contador+=numero
    }

} while(numero!=null)
document.write(`La suma total de los numeros es: ${contador}`)