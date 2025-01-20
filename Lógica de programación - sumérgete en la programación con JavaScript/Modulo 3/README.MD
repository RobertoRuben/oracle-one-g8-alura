# 🔄 Lógica de Programación con JavaScript - Módulo 3

## 📝 Descripción
Ejercicios prácticos del tercer módulo enfocados en bucles while y manipulación de contadores en JavaScript.

## 🚀 Desafíos y Soluciones

### 1. Contador Ascendente
**Desafío**: Implementar contador de 1 a 10 usando while.
```javascript
let contador = 1;
while(contador <= 10) {
     console.log(contador);
     contador++;
}
```

### 2. Contador Descendente
**Desafío**: Implementar contador de 10 a 0 usando while.
```javascript
let contadorDescendente = 10;
while(contadorDescendente >= 0) {
     console.log(contadorDescendente);
     contadorDescendente--;
}
```

### 3. Cuenta Regresiva
**Desafío**: Crear cuenta regresiva desde número ingresado.
```javascript
let mensajeCuentaRegresiva = "Ingrese un numero";
let numeroIngresadoCuentaRegresiva = prompt(mensajeCuentaRegresiva);
let contadorCuentaRegresiva = 0;

console.log("Iniciando cuenta regresiva ...");
while(contadorCuentaRegresiva <= numeroIngresadoCuentaRegresiva) {
     console.log(numeroIngresadoCuentaRegresiva);
     numeroIngresadoCuentaRegresiva--;
}
```

### 4. Cuenta Progresiva
**Desafío**: Crear cuenta progresiva hasta número ingresado.
```javascript
let mensajeCuentaProgresiva = "Ingrese un numero";
let numeroIngresadoCuentaProgresiva = prompt(mensajeCuentaProgresiva);
let contadorCuentaProgresiva = 0;

console.log('Iniciando cuenta ...');
while(contadorCuentaProgresiva <= numeroIngresadoCuentaProgresiva) {
     console.log(contadorCuentaProgresiva);
     contadorCuentaProgresiva++;
}
```


## ✨ Conceptos Aplicados
- Bucles while
- Variables y contadores
- Operadores de incremento/decremento
- Entrada de usuario (prompt)
- Salida en consola (console.log)
- Operadores de comparación
- Estructuras de control

## 🔗 Recursos
- [Ejecutar código en línea](https://playcode.io/javascript)
