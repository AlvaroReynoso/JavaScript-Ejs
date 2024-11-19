/* 
Objetos: cosas de la vida real
Tienen propiedades, llamo a un objeto con su nombre.atributo
ej: text1=objectName.propertyName
*/
//Creo propiedades
let miAuto= new Object()
miAuto.marca="Ford"
miAuto.tipo="Ranger"
miAuto.modelo=2019
//Las uso
console.log("Mi auto es: ",miAuto.marca,miAuto.tipo,miAuto.modelo)

//creamos el objetos entre llaves
let persona={
    nombre:"Auto",
    apellido: "Perez",
    dni:40619544,
}
//los metodos ,son funciones pero dentro de un objeto, me deja interactuar con otros objetos o con el resto del programa
// nombre seguido con (), luego { dentro de esto va el bloque } y fuera se llama el return

nombreCompleto:function nombreCompleto(){
    return this.nombre+ " "+ this.apellido
}
console.log(persona)
console.log(persona.nombre)
console.log(persona.nombreCompleto)

//Clases: son moldes que nos sirve para crear mas de un objeto, despues de crearlos se crea un constructor 
// constructor: define valores iniciales al nuevo objeto
//clase perro con constructora (clase)
class perro{
    constructor(nombre,edad,vivo)
    {
        this.nombre=nombre
        this.edad=edad
        this.vivo=vivo
    }
}

// instanciamos objetos clase perro
let perro1=new perro("Lola",12,true)
let perro2=new perro ("Tobi",10,true)
//Modifico algunos atributos
perro.nombre= "Tobi"
perro.edad=11

//String
//Los metodos tienen parametros siempre ej: texto.length(), concat(str1,str2)

var text1= "Hola a todos"
var text1= new String ("Hola")

var texto1="¡hola a todos!"
largo=texto1.length
console.log(largo)  //14
//puedo usar directamente
console.log("Hola".length) //4

var cad="hola como estas"
document.write("CHARAT <br>")
document.write(cad.charAt(0)) //Devuelve h
var pos1=cad[1] //almaceno en el pos1 el caracter 1("0")
var pos2=cad[20] //indefinido (no hay elemento nro 20)
document.write(pos1) //devuelve o
document.write(pos2) //undefinied

var cad="hola como estas"
document.write(cad.indexOf("a")) //MNuestra "3" en el docuement html
document.write(cad.indexOf("a",4)) //MNuestra "13" en el docuement html ,arranca en la pos 4
document.write(cad.lastindexOf("o")) //MNuestra "8" en el docuement html ,la ult letra "o" desde la derecha 
document.write(cad.lastindexOf("o",7)) //MNuestra "6" en el docuement html ,hasta la posicion 7 de la derecha

// funciones extras
/* repeat (n)
.toLowerCase()
.ToUpperCase()
.trim() devuelve el texto sin espacios a la izq y derecha
.replace()
.substr()
*/
var cad="aprendiendo js"
document.write(cad.repeat(3)) //me va a repetir 3 veces el texto
document.write(cad.toLowerCase)
document.write(cad.toUpperCase)
var cad2="    aprendiendo js"
alert(cad2.trim()) //me muestra el texto sin espacios SE USA MUCHO EN FORMS
var cad2 ="aprendiendo js para la gente"
document(cad.substring(12,4)) //en la pos 12 me corta 4 en adelante
document(cad.substring(1,4)) //en la pos 1 me corta 4 en adelante 
/*
${nombre} es una plantilla de cadena de caracteres
se evalua lo que esta en la plantilla 
*/
var a=5
var b=10
console.log(`java se publico hace ${a+b} años`)
console.log(`compre ${2*(a+b)} kilos de harina`)

var usuario ={ nombre: "Juan Perez"}
console.log(`Estas conectado como ${ usuario.nombre.toUpperCase()}.`)
//Estas conectado como JUAN PEREZ.

function suma(a,b)
{
    return a+b
}
var a=Number(prompt("Ingrese numero a: "))
var b=Number(prompt("Ingrese numero b: "))
console.log(a+ " "+ b+ "es" + suma(a,b)) // 12 + 21 es 33
console.log(`${a} + ${b} es ${suma (a,b)}`) // 12 + 21 es 33
//apretando enter en el string lo va a leer tambien como un enter
// ej:
var hola= `Hola a todos
soy alvaro`
console.log(hola)



