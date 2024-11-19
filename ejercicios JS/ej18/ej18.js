// Pide la edad y si es mayor de 18 años indica que ya puede conducir

let edad=Number(prompt("Ingrese su edad: "))
if (edad>=18)
{
    alert(`Ya puede conducir, usted tiene ${edad} años`)
}
else
{
    alert(`Usted no puede conducir, tiene ${edad} años`)
}