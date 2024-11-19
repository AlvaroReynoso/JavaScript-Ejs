// Escribe un programa que pida una frase y escriba cuántas de las letras que
// tiene son vocales
let frase = prompt("Ingrese su frase: ").toLocaleLowerCase()
let contador = 0
for (i = 0; i < frase.length; i++) {
    if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u") {
        contador += 1
    }
}
alert("Cantidad de vocales: " + contador)
