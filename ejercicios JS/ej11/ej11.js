// Escribe un programa que pida una frase y escriba cuántas de las letras que
// tiene son vocales
let frase=prompt("Ingrese frase que desee: ").toLowerCase()
let letra
let vocalesEncontradas=0
for(let i=0;i<frase.length;i++)
{
    letra=frase[i]
    if("aeiou".includes(letra))
    {
        vocalesEncontradas+=1
    }
}
document.write("Su cantidad total de vocales son: ",vocalesEncontradas)