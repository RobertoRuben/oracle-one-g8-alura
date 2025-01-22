//1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log('Bienvenido')

//2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log
//  para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = "Beto"
console.log(`¡Hola, ${nombre}!`)

//3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let nombreAlert = "Beto";
alert(`¡Hola, ${nombreAlert}!`)

//4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
//Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let pregunta = "¿Cuál es el lenguaje de programación que más te gusta?";
let respuesta = prompt(pregunta)
console.log(respuesta)

//5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
//Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
//Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 10;
let valor2 = 35;

let resultado = valor1 + valor2
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`)

//6.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, 
//realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza
// console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let valorResta1 = 236;
let valorResta2 = 150;
let resultadoResta = valorResta1 - valorResta2;

console.log(`La diferencia entre ${valorResta1} y ${valorResta2} es igual a ${resultadoResta}`)

//7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar 
//si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola
let mensajeEdad = "Ingresa tu edad";
let edadUsuario = prompt(mensajeEdad)

if (edadUsuario>=18){
  console.log("Eres mayor de edad");
}else if(edadUsuario <= 18 && edadUsuario >1){
  console.log("Eres menor de edad");
}else{
  console.log("Edad no valida")
}


//8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es 
//positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numeroIngresado = 0

if (numeroIngresado >0){
  console.log("El numero es positivo");
}else if(numeroIngresado == 0){
  console.log("El numero ingresado es 0")
}else{
  console.log("El numero es negativo")
}

//9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let contador = 0;

while(contador <10){
  contador++;
  console.log(contador);
}

//10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o
// igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 5;

if(nota>=7){
  console.log("Aprobaste");
}else if(nota <7 && nota>=0){
  console.log("Repobaste");
}else{
  console.log("Ingrese una nota valida");
}

//11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numeroAleatorio = Math.random()
console.log(numeroAleatorio)

//12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numeroAleatorioEntero = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorioEntero)

//13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let numeroAleatorioEntero1000 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAleatorioEntero1000)