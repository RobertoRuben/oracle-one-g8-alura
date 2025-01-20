//1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", 
// muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!"
let diaSemana = prompt("¿Qué día de la semana es?");
if (diaSemana == "Sábado" || diaSemana == "Domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

//2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numeroIngresado = prompt("Ingrese un número");
if (numeroIngresado > 0) {
    alert("El número ingresado es positivo");
}else if (numeroIngresado < 0) {
    alert("El número ingresado es negativo");
}else if (numeroIngresado == 0) {
    alert("El número ingresado es igual a 0");
}

//3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra
// "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuación = prompt("Ingrese su puntuación");
if (puntuación >=100){
    alert("¡Felicidades, has ganado!");
}else{
    alert("Intentalo nuevamente para ganar.");
}

//4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un 
// template string para incluir el valor del saldo
let saldoIngresado = prompt("Ingrese su saldo");
alert(`El salgo que ingresaste es ${saldoIngresado} nuevos soles`)

//5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombreUsuario = prompt("Ingrese su nombre");
alert(`Bienvenido ${nombreUsuario}`);