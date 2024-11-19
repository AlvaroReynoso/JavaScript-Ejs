// Escribe un programa que pida una frase y escriba cuántas veces aparecen
// cada una de las vocales
let frase=prompt("Ingrese frase que desee: ").toLowerCase()
let letra
let vocalEncontradas=[0,0,0,0,0]
for(i=0;i<frase.length;i++)
{
    letra=frase[i]
    if(letra=="e")
    {
        vocalEncontradas[0]+=1
    }
    else if(letra=="e")
    {
        vocalEncontradas[1]+=1
    }

    else if(letra=="i")
    {
        vocalEncontradas[2]+=1
    }

    else if(letra=="o")
    {
        vocalEncontradas[3]+=1
    }
    else if(letra=="u")
    {
        vocalEncontradas[4]+=1
    }
}
console.log("la a aparece: ",vocalEncontradas[0])
console.log("la e aparece: ",vocalEncontradas[1])
console.log("la i aparece: ",vocalEncontradas[2])
console.log("la o aparece: ",vocalEncontradas[3])
console.log("la u aparece: ",vocalEncontradas[4])
