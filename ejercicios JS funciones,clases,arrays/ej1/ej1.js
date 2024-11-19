// Realizar una función, a la que se le pase como parámetro un número N,
// y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
// curso Full Stack”
let numero = Number(prompt("Ingrese cuantas veces quiere que aparezca la frase: "))

function bienvenido(numero) {
    for (let i = 0; i < numero; i++) {
        document.write("Bienvenido al curso FullStack <br>")
    }
}
bienvenido(numero)
