// Crear una función que lea notas hasta que ingrese -1 y devuelve el
// promedio de las notas leídas.

let nota
function promedio(notas)
{
    let contador=0
    do{
        notas=Number(prompt("Ingrese nota"))
        if(notas>0)
        {
            contador+=notas
        }
    } while(notas !=0)
    console.log(`El promedio total de las notas es: ${contador}`)
}
promedio(nota)

