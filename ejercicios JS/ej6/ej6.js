// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
// los tres.
let num1 = Number(prompt("Ingrese numero 1: "));
let num2 = Number(prompt("Ingrese numero 2: "));
let num3 = Number(prompt("Ingrese numero 3: "));
if (num1 > num2 && num2 > num3) {
  alert("Su numero mayor es: "+ num1);
}
if (num2 > num1 && num2 > num3) {
  alert("Su numero mayor es: "+num2);
} else {
  alert("Su numero mayor es: "+num3);
}
