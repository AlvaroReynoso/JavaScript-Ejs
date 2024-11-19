// Escribe un programa que pida una frase y escriba las vocales que aparecen
let frase=prompt("Ingrese frase que desee: ").toLocaleLowerCase()
let letra
let vocalesEncontradas=""
for(i=0;i<frase.length;i++)
{
    letra=frase[i]
    if("aeiou".includes(letra))
    {
        vocalesEncontradas+=letra
        
    }
}
console.log("Su vocal es",vocalesEncontradas)