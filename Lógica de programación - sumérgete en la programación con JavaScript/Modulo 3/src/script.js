//1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;

while(contador <=10){
    console.log(contador);
    contador++;
}

//2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contadorDescendente = 10;

while(contadorDescendente >=0){
    console.log(contadorDescendente);
    contadorDescendente--;
}

//3. Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador
let mensajeCuentaRegresiva = "Ingrese un numero";
let numeroIngresadoCuentaRegresiva = prompt(mensajeCuentaRegresiva);
let contadorCuentaRegresiva = 0;

console.log("Iniciando cuentra regresiva ...");
while(contadorCuentaRegresiva <= numeroIngresadoCuentaRegresiva){
    console.log(numeroIngresadoCuentaRegresiva);
    numeroIngresadoCuentaRegresiva--;
}

//4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 
// 'while' en la consola del navegador.
let mensajeCuentaProgresiva = "Ingrese un numero";
let numeroIngresadoCuentaProgresiva = prompt(mensajeCuentaProgresiva)
let contadorCuentaProgresiva = 0;

console.log('Iniciando cuenta ...')
while(contadorCuentaProgresiva<=numeroIngresadoCuentaProgresiva){
    console.log(contadorCuentaProgresiva);
    contadorCuentaProgresiva++
}