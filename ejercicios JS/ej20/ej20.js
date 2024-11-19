// Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
// salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
let cadenas=""
let frase
let esPrimero=true
do
{
    frase=prompt("Ingrese frase: ")
    if(frase!=null)
    {

        if(esPrimero===true)
        {
            cadenas+=frase
            esPrimero=false
        }
        else
        {
            cadenas+="-"+frase 
        }
    }
} while(frase!=null)
    console.log("Su frase concatenada es: ",cadenas)
