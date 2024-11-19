// 24. Haz un script que escriba una pirámide inversa de los números del 1 al
// número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
// 666666
// 55555
// 4444
// 333
// 22
// 1
let numero = Number(prompt("Ingrese numero que desee"))
for (let i = numero; i >= 1; i--) {
    for (let j = i; j >=1; j--) {
        document.write(`${i}`)
    }
    document.write(`<br>`)
}