
# 🎯 Lógica de Programación con JavaScript - Módulo 4

## 📝 Descripción
Ejercicios prácticos del cuarto módulo enfocados en console.log, variables, operadores y números aleatorios.

## 🚀 Desafíos y Soluciones

### 1. Mensaje de Bienvenida
**Desafío**: Mostrar mensaje usando console.log.
```javascript
console.log('Bienvenido');
```

### 2. Saludo Personalizado con Console
**Desafío**: Mostrar saludo usando template string.
```javascript
let nombre = "Beto";
console.log(`¡Hola, ${nombre}!`);
```

### 3. Alerta de Saludo
**Desafío**: Mostrar saludo usando alert.
```javascript
let nombreAlert = "Beto";
alert(`¡Hola, ${nombreAlert}!`);
```

### 4. Lenguaje Favorito
**Desafío**: Solicitar y mostrar lenguaje favorito.
```javascript
let pregunta = "¿Cuál es el lenguaje de programación que más te gusta?";
let respuesta = prompt(pregunta);
console.log(respuesta);
```

### 5. Calculadora de Suma
**Desafío**: Realizar suma y mostrar resultado.
```javascript
let valor1 = 10;
let valor2 = 35;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);
```

### 6. Calculadora de Resta
**Desafío**: Realizar resta y mostrar resultado.
```javascript
let valorResta1 = 236;
let valorResta2 = 150;
let resultadoResta = valorResta1 - valorResta2;
console.log(`La diferencia entre ${valorResta1} y ${valorResta2} es igual a ${resultadoResta}`);
```

### 7. Verificador de Edad
**Desafío**: Verificar mayoría de edad.
```javascript
let mensajeEdad = "Ingresa tu edad";
let edadUsuario = prompt(mensajeEdad);
if (edadUsuario >= 18) {
    console.log("Eres mayor de edad");
}
```

### 8. Analizador de Números
**Desafío**: Verificar si número es positivo/negativo/cero.
```javascript
if (numeroIngresado > 0) {
    console.log("El numero es positivo");
}
```

### 9. Contador con While
**Desafío**: Mostrar números del 1 al 10.
```javascript
let contador = 0;
while(contador < 10) {
    contador++;
    console.log(contador);
}
```

### 10. Sistema de Notas
**Desafío**: Evaluar aprobación según nota.
```javascript
if(nota >= 7) {
    console.log("Aprobaste");
}
```

### 11. Número Aleatorio
**Desafío**: Generar número aleatorio.
```javascript
console.log(Math.random());
```

### 12. Número Aleatorio 1-10
**Desafío**: Generar entero aleatorio 1-10.
```javascript
console.log(Math.floor(Math.random() * 10) + 1);
```

### 13. Número Aleatorio 1-1000
**Desafío**: Generar entero aleatorio 1-1000.
```javascript
console.log(Math.floor(Math.random() * 1000) + 1);
```



## ✨ Conceptos Aplicados
- Console.log
- Variables y operadores
- Template strings
- Condicionales (if/else)
- Bucles (while)
- Math.random y Math.floor
- Entrada/salida (prompt/alert)


- ##  🔗 Recursos

-  [Ejecutar código en línea](https://playcode.io/javascript)
- [Math - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math)