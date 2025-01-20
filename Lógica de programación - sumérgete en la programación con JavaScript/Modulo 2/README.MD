# 🎯 Lógica de Programación con JavaScript - Módulo 2

## 📝 Descripción
Ejercicios prácticos del segundo módulo del curso "Lógica de programación: sumérgete en la programación con JavaScript".

## 🚀 Desafíos y Soluciones

### 1. Verificador de Fin de Semana
**Desafío**: Identificar si es fin de semana.
```javascript
let diaSemana = prompt("¿Qué día de la semana es?");
if (diaSemana == "Sábado" || diaSemana == "Domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}
```

### 2. Analizador de Números
**Desafío**: Determinar si un número es positivo o negativo.
```javascript
let numeroIngresado = prompt("Ingrese un número");
if (numeroIngresado > 0) {
    alert("El número ingresado es positivo");
} else if (numeroIngresado < 0) {
    alert("El número ingresado es negativo");
} else if (numeroIngresado == 0) {
    alert("El número ingresado es igual a 0");
}
```

### 3. Sistema de Puntuación
**Desafío**: Evaluar puntuación del juego.
```javascript
let puntuación = prompt("Ingrese su puntuación");
if (puntuación >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intentalo nuevamente para ganar.");
}
```

### 4. Consulta de Saldo
**Desafío**: Mostrar saldo usando template strings.
```javascript
let saldoIngresado = prompt("Ingrese su saldo");
alert(`El salgo que ingresaste es ${saldoIngresado} nuevos soles`);
```

### 5. Mensaje de Bienvenida Personalizado
**Desafío**: Crear saludo personalizado.
```javascript
let nombreUsuario = prompt("Ingrese su nombre");
alert(`Bienvenido ${nombreUsuario}`);
```

## 🛠️ Tecnologías Utilizadas
- JavaScript
- HTML
- CSS

## 🔗 Recursos
- [Ejecutar código en línea](https://playcode.io/javascript)

## 📁 Estructura del Proyecto
Las soluciones se encuentran en `Modulo 2/src/script.js`

## ✨ Conceptos Aplicados
- Condicionales (if/else)
- Template Strings
- Operadores de comparación
- Operadores lógicos
- Prompts y Alerts